const sqlite3 = require('sqlite3').verbose();

// open database file
let db = new sqlite3.Database('./database/donocode.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Connected to the DonoCode database.');
});

db.serialize(() => {
    db.prepare('CREATE TABLE IF NOT EXISTS qrTable (id integer primary key autoincrement, qrId TEXT, account INTEGER, phone TEXT, message TEXT, messageReceived TEXT, dateReceived DATE)').run().finalize()
    db.prepare('CREATE TABLE IF NOT EXISTS accounts (id integer primary key autoincrement, firstName TEXT, lastName TEXT, phone TEXT)').run().finalize()

    

    db.get(`SELECT * FROM qrTable`, (err, row) => {
      console.log(row)
  });
})



/**
 * getStatus - tracks donation status of a qr code
 * @param {String} donationId - Alphanumeric value correlating to the id of 
 * @returns value correlating to status of code: 0 if not setup, 1 if setup but not received, 2 if setup and received
 */
const getStatus = async (donationId) => {
  return new Promise(resolve => {
    console.log(donationId)
    var qrStatus = -1;
    db.serialize(() => {
      db.get(`SELECT * FROM qrTable WHERE donationId == ${donationId}`, (err, row) => {
        if(row == null){
          throw "that donation doesn't exist"
        }

        if(row[0].Account == -1){
          qrStatus = 0;
        }else{
          if(row[0].DateReceived == null){
            qrStatus = 1;
          }else{
            qrStatus = 2;
          }
        }
      })
    })
    return resolve(qrStatus);
  })
}

/**
 * createUser - Creates a user with specified parameters
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} phone 
 */
const createUser = async (firstName, lastName, phone) => {
  return new Promise(resolve => {
    db.serialize(() => {
      db.run('INSERT INTO accounts (firstName,lastName,phone) VALUES (?,?,?)', [firstName,lastName, phone], (err) => {
        if(err) {
          return console.log("error creating user: "+err.message); 
        }
      })
    })
    return resolve(firstName + " put into accounts")
  })
}

/**
 * getProfile - Gets profile information for a user
 * @param {Number} profileId - integer id of the user
 * @returns - JSON object with first, last and phone
 */
const getProfile = async (profileId) => {
  return new Promise(resolve => {
    var profile;
    db.serialize(() => {
      db.get(`SELECT firstName, lastName, phone FROM accounts WHERE id = ?`, [profileId], (err, row) => {
        if(err)
          console.log("error in getting profile: "+err);
        if(row == null){
          console.log("user does not exist");
        }

        console.log(row)
        profile = {
          "firstName": row.firstName,
          "lastName": row.lastName,
          "phone": row.phone
        }
        return resolve(profile)
      })
    })
  })
}

/**
 * setProfile - Sets profile with new information
 * @param {Number} profileId - Integer correlating to row of user
 * @param {JSON} newInformation - JSON object with information (doesn't need to include all information)
 */
const setProfile = async (profileId, newInformation) => {
  return new Promise(resolve => {
    db.serialize(() => {
      var profile = getProfile(profileId)
      db.run(`UPDATE accounts SET firstName = ${newInformation.firstName == null ? newInformation.firstName : profile.firstname}, 
                                  lastName = ${newInformation.lastName == null ? newInformation.lastName : profile.lastName}, 
                                  phone = ${newInformation.phone == null ? newInformation.phone : profile.phone}`, (err) => {
        if(err != null)
          console.log("error in setting profile: "+err);
        return resolve("updated account")
      })
    })
  })
}

/**
 * createDonationLinked
 * @param {String} qrId - The alphanumeric value generated for the hex
 * @param {Number} account - Linked to row of user
 * @param {String} message - The message left for the donee
 */
const createDonationLinked = async (qrId, account, message) => {
  return new Promise(resolve => {
    db.serialize(() => {
      db.run('INSERT INTO qrTable (qrId,account,message) VALUES (?,?,?)', [qrId,account, message], (err) => {
        if(err) {
          return console.log(err.message); 
        }
        console.log(qrId + " put into qr linked")
      })
    })
    return resolve("linked creation created")
  })
}

/**
 * createDonationUnlinked
 * @param {String} qrId 
 * @param {String} phone 
 * @param {String} message 
 */
const createDonationUnlinked = async (qrId, phone, message) => {
  return new Promise(resolve=>{
    db.serialize(() => {
      db.run('INSERT INTO qrTable (qrId,phone,message) VALUES (?,?,?)', [qrId,phone, message], (err) => {
        if(err) {
          return console.log(err.message); 
        }
        console.log(qrId + " put into qr unlinked")
      }).finalize()
    })
    return resolve(qrId+" put into qr unlinked")
  })
}

/**
 * getDonation - Returns a list of objects representing received donations
 * @param {Number} profileId - Integer correlating to user
 * @returns - list of objects representing received donations
 */
const getDonation = async (profileId) => {
  return new Promise(resolve => {
    var donations = [];
    db.serialize(() => {
      db.all(`SELECT * FROM qrTable WHERE account = ?`, [profileId], function(err, rows) {  
        rows.forEach(function (row) {  
            donations.push({
              message: row.message,
              dateReceived: row.dateReceived
            })
        }) 
        return resolve(donations); 
      });
      
    })

    
  })
}

const test = () => {
    createUser("Berke","Lunstad","6518084290")
    createDonationLinked("TestID", 1, "happy birthday")    
}

// test()

module.exports = {
  getProfile,
  getStatus,
  setProfile,
  createDonationLinked,
  createDonationUnlinked,
  getDonation
}