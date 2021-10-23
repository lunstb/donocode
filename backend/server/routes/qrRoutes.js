const express = require("express");

const qrRouter = express.Router()


qrRouter.route('/register')
  .get((req, res) => {
    res.send('ur special jk ur based')
  })

module.exports = qrRouter