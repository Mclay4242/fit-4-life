const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");

router.post("/signup", async (request, response) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePasswoard = await bcrypt.hash(
    request.body.password,
    saltPassword
  );

  const signedUpUser = new signUpTemplateCopy({
    userName: request.body.userName,
    email: request.body.email,
    password: securePasswoard,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
