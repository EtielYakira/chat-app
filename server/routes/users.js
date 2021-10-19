const express = require('express');
const router = express.Router();
const users = require("../controllers/users.controller");


router.route("/:id")
      .get(users.findUserById)
      .delete(users.deleteUser);

router.route("/signup")
      .post(users.addUser)

router.route("/signin")
      .post(users.findUserById)

router.route("/")
      .get(users.findAll)

module.exports = router;
