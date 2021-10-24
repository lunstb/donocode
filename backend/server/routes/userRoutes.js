const express = require("express");

const userRouter = express.Router()


userRouter.route('/profile/:userId')
  .get((req, res) => {
    var userId = req.params.userId;

    res.send(userId);
  })

userRouter.route('/setprofile')
  .post((req, res) => {
    var firstName = req.body.firstName,
        lastName = req.body.lastName,
        phoneNum = req.body.phoneNum;

    console.log(firstName + " " + lastName + " " + phoneNum);
  })

userRouter.route('/getdonations/:userid')
  .get((req, res) => {
    var userId = req.params.userId;

    res.send(userId);
  })

module.exports = userRouter