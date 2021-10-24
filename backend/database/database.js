const sqlite3 = require('sqlite3').verbose();

// open database file
let db = new sqlite3.Database('./database/donocode.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('Connected to the DonoCode database.');
});

db.serialize(() => {
    db.prepare(`CREATE TABLE IF NOT EXISTS qrTable 
                (
                  id integer primary key autoincrement, 
                  qrId TEXT, 
                  fireId TEXT, 
                  phone TEXT, 
                  donorMessage TEXT, 
                  recipientMessage TEXT, 
                  dateReceived DATE
                )`).run().finalize()

    db.prepare(`CREATE TABLE IF NOT EXISTS accounts 
                (
                  id integer primary key autoincrement, 
                  fireId TEXT,
                  firstName TEXT, 
                  lastName TEXT, 
                  phone TEXT
                )`).run().finalize()
});




/**
 * getStatus - tracks donation status of a qr code
 * @param {String} qrId - Alphanumeric value correlating to the id of 
 * @returns value correlating to status of code: 0 if not setup, 1 if setup but not received, 2 if setup and received
 */
const getStatus = async (qrId) => {
  return new Promise(resolve => {
    console.log(qrId)
    var qrStatus = -1;
    db.serialize(() => {
      db.get(`SELECT * FROM qrTable WHERE qrId == ${qrId}`, (err, row) => {
        if(row == null){
          throw "that donation doesn't exist"
        }

        if(!row[0].phone){
          qrStatus = 0;
        }else if(!row[0].DateReceived){
            qrStatus = 1;
        } else {
            qrStatus = 2;
        }
      })
    })
    return resolve(qrStatus);
  })
}

/**
 * createUser - Creates a user with specified parameters
 * @param {String} fireId - Alphanumeric value correlating to the id of the user
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} phone 
 */
const createUser = async (fireId, firstName, lastName, phone) => {
  return new Promise(resolve => {
    db.serialize(() => {
      db.run('INSERT INTO accounts (fireId, firstName,lastName,phone) VALUES (?,?,?,?)', [fireId, firstName,lastName, phone], (err) => {
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
      db.get(`SELECT fireId, firstName, lastName, phone FROM accounts WHERE fireId = ?`, [profileId], (err, row) => {
        if(err)
          return console.log("error in getting profile: " + err);
        if(row == null){
          return console.log("user does not exist");
        }

        console.log(row)
        profile = {
          "fireId": row.fireId,
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
 * @param {Number} fireId - Integer correlating to row of user
 * @param {JSON} newInformation - JSON object with information (doesn't need to include all information)
 */
const setProfile = async (fireId, newInformation) => {
  return new Promise(resolve => {
    db.serialize(() => {
      var profile = getProfile(fireId)
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
 * @param {Number} fireId - Linked to row of user
 * @param {String} donorMessage - The message left for the donee
 */
const createDonationLinked = async (qrId, fireId, donorMessage) => {
  return new Promise(resolve => {
    db.serialize(() => {
      var profile = getProfile(fireId);
      var { phone } = profile;

      db.run('INSERT INTO qrTable (qrId,fireId,phone,donorMessage) VALUES (?,?,?,?)', [qrId,fireId,phone,donorMessage], (err) => {
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
 * @param {String} donorMessage 
 */
const createDonationUnlinked = async (qrId, phone, donorMessage) => {
  return new Promise(resolve=>{
    db.serialize(() => {
      db.run('INSERT INTO qrTable (qrId,phone,donorMessage) VALUES (?,?,?)', [qrId,phone,donorMessage], (err) => {
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
              message: row.donorMessage,
              dateReceived: row.dateReceived
            })
        }) 
        return resolve(donations); 
      });
    })
  })
}


/**
 * getDonorPhone - Returns the phone number of the donor
 * @param qrId - The alphanumeric value generated for the qr hex 
 * @returns - The phone number of the donor
 */
const getDonorPhone = async (qrId) => {
  return new Promise(resolve => {
    var phone;
    db.serialize(() => {
      db.get(`SELECT phone FROM qrTable WHERE qrId = ?`, [qrId], (err, row) => {
        if(err)
          console.log("error in getting profile: " + err);
        if(row == null)
          console.log("user does not exist");
        phone = row[0].phone;
        return resolve(phone);
      })
    })
  })
}

/**
 * registerReceipt - Updates the database with the date the donation was received
 * @param {String} qrId - The alphanumeric value generated for the qr hex
 * @param {String} dateReceived - The date the donation was received
 * @param {String} recipientMessage - The message left by the recipient
 * return
 */
const registerReceipt = async (qrId, dateReceived, recipientMessage) => {
  return new Promise(resolve => {
    db.serialize(() => {
      db.run(`UPDATE qrTable SET dateReceived = ${dateReceived}, recipientMessage = ${recipientMessage} WHERE qrId = ${qrId}`, (err) => {
        if(err)
          console.log("error in getting profile: " + err);
        return resolve("updated qr table");
      })
    })
  })
}




const test = () => {
  createUser("213jhkf", "Berke","Lunstad","6518084290")
  createDonationLinked("21312", "TestID", 1, "happy birthday")    
}

test()

module.exports = {
  createUser,
  getProfile,
  getStatus,
  setProfile,
  createDonationLinked,
  createDonationUnlinked,
  getDonation,
  getDonorPhone
}