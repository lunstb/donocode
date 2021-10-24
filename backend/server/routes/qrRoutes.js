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
    // var qrCodes = JSON.parse(req.body.qrCodes)

    await req.body.qrCodes.forEach(async qrCode => {
      const donation = {
        "qrId": qrCode.qrId,
        "account": qrCode.account,
        "phone": qrCode.phone,
        "message": qrCode.message
      }
      console.log("inserting", donation)
      if(donation.account){
        await database.createDonationLinked(donation.qrId,donation.account, donation.message);
      }else{
        await database.createDonationUnlinked(donation.qrId, donation.phone, donation.message)
      }
    });
  })

qrRouter.route('/generatecode/:number')
  .get(async (req, res) => {
    var num = req.params.number;
    res.send(await database.generateQrCodes(num));
  })

qrRouter.route('/getstatus/:donationId')
  .get(async (req, res) => {
    var donationId = req.params.donationId;

    res.send(await database.getStatus(donationId));
  })

qrRouter.route('/sendmessage')
  .post(async (req, res) => {
    console.log("inside send message", req.body);
    var { fireId, donationMsg }  = req.body;
    var profileInfo = await database.getProfile(fireId);
    client.messages.create({
      body: donationMsg,
      from: twilioNumber,
      to: profileInfo.phone
    })
    .then(message => {
      console.log("Message sent with id", message.sid);
    })
    .catch(err => {
      console.log("Error sending message", err);
    })
    res.send("Message Sent");
  })


module.exports = qrRouter