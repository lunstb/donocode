const express = require("express");

const qrRouter = express.Router()


qrRouter.route('/register')
  .post((req, res) => {
    var qrCodes = JSON.parse(req.body.qrCodes)

  
    res.send('ur special jk ur based')
  })

qrRouter.route('/getstatus:donationId')
  .get((req, res) => {
    var donationId = req.params.donationId;

    res.send(donationId);
  })

qrRouter.route('/sendmessage')
  .post((req, res) => {
    var donationId = req.body.donationId,
        donationMsg = req.body.donationMsg;

    console.log(donationId+" "+donationMsg)
    res.send('ur special jk ur based')
  })

module.exports = qrRouter