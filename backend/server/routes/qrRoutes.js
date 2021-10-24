const express = require("express");
const database = require("./../../database/database");
const qrRouter = express.Router()

require("dotenv").config({ path: "../../.env" });
const twilio = require("twilio");
const twilioSID = process.env.TWILIO_SID || "AC958fdda0d79c5184f7e0ea64057dce31";
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN || "8bf927a61fe890465b8e9d14cc26ce7f";
const twilioNumber = process.env.TWILIO_NUMBER || "+13344630812";
const client = new twilio(twilioSID, twilioAuthToken);

qrRouter.route('/register')
  .post(async (req, res) => {
    var qrCodes = JSON.parse(req.body.qrCodes)

    await qrCodes.forEach(async qrCode => {
      const donation = {
        "qrId": qrCode.qrId,
        "fireId": qrCode.fireId,
        "phone": qrCode.phone,
        "donorMessage": qrCode.donorMessage
      }

      if(donation.fireId){
        await database.createDonationLinked(donation.qrId,donation.fireId, donation.message);
      }else{
        await database.createDonationUnlinked(donation.qrId, donation.phone, donation.message)
      }
    });
  })

qrRouter.route('/getstatus:qrId')
  .get(async (req, res) => {
    var qrId = req.params.qrId;

    res.send(await database.getStatus(qrId));
  })

qrRouter.route('/sendmessage/:qrId')
  .post(async (req, res) => {
    var qrId = req.params.qrId;
    var { message }  = req.body;
    var phone = await database.getDonorPhone(qrId);

    client.messages.create({
      body: message,
      from: twilioNumber,
      to: phone
    })
    .then(message => {
      console.log("Message sent with id", message.sid);
    })
    .catch(err => {
      console.log("Error sending message", err);
    })
    res.send("Message Sent");
  })

qrRouter.route("/donation/new-unlinked")
  .get(async (req, res) => {
    var { qrId, phone, message } = req.body;
    await database.createDonationUnlinked(qrId, phone, message);
    res.send("Donation Created");
  })

qrRouter.route("/register-receipt/:qrId")
  .post(async (req, res) => {
    var qrId = req.params.qrId;
    let (dateReceived, recipientMessage) = req.body;
    await database.registerReceipt(qrId, dateReceived, recipientMessage);
    res.send("Receipt Registered");
  })





module.exports = qrRouter