const express = require("express");
const database = require("./../../database/database");

const qrRouter = express.Router()


qrRouter.route('/register')
  .post(async (req, res) => {
    var qrCodes = JSON.parse(req.body.qrCodes)

    await qrCodes.forEach(async qrCode => {
      const donation = {
        "qrId": qrCode.qrId,
        "account": qrCode.account,
        "phone": qrCode.phone,
        "message": qrCode.message
      }

      if(donation.account){
        await database.createDonationLinked(donation.qrId,donation.account, donation.message);
      }else{
        await database.createDonationUnlinked(donation.qrId, donation.phone, donation.message)
      }
    });
  })

qrRouter.route('/getstatus:donationId')
  .get(async (req, res) => {
    var donationId = req.params.donationId;

    res.send(await database.getStatus(donationId));
  })

qrRouter.route('/sendmessage')
  .post((req, res) => {
    var donationId = req.body.donationId,
        donationMsg = req.body.donationMsg;

    console.log(donationId+" "+donationMsg)
    res.send('ur special jk ur based')
  })

module.exports = qrRouter