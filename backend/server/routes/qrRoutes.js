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
    console.log("attempting to register")
    console.log(req.body.qrCodes)
    if (req.body.qrCodes[0].fireId) {
      await req.body.qrCodes.forEach(async qrCode => {
        let profile = await database.getProfile(qrCode.fireId);
        await database.createDonationLinked(qrCode.qrId,qrCode.fireId, "");      
      });
    } else {
      await req.body.qrCodes.forEach(async qrCode => {
        await database.createDonationUnlinked(qrCode.qrId, qrCode.phone, qrCode.message)  
      });
    }
  })

qrRouter.route('/linkaccount')
  .post(async (req, res) => {
    console.log("attempting to link account")
    let { qrIds, fireId } = req.body;
    await database.linkAccount(qrIds, fireId);
  })

qrRouter.route('/generatecode/:number')
  .get(async (req, res) => {
    var num = req.params.number;
    res.send(await database.generateQrCodes(num));
  })

qrRouter.route('/getstatus/:qrId')
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
    let {dateReceived, recipientMessage} = req.body;
    await database.registerReceipt(qrId, dateReceived , recipientMessage);
    res.send("Receipt Registered");
  })





module.exports = qrRouter