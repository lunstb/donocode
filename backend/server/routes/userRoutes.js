const express = require("express");
const database = require("./../../database/database");

const userRouter = express.Router()


userRouter.route('/profile/:userId')
  .get(async (req, res) => {
    var userId = req.params.userId;

    var profileInfo = await database.getProfile(userId)
    console.log(profileInfo)

    res.send(profileInfo);
  })

userRouter.route('/setprofile')
  .post((req, res) => {
    var profileId = req.body.profileId
    var profile = {
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "phone": req.body.phone
    }

    console.log(await database.setProfile(profileId, profile));
  })

userRouter.route('/getdonations/:userId')
  .get(async (req, res) => {
    var userId = req.params.userId;

    var donations = await database.getDonation(userId)

    res.send(donations);
  })

module.exports = userRouter