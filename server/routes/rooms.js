const express = require('express');
const router = express.Router();
const rooms = require("../controllers/rooms.controller");


router.route("/:id")
      .get(rooms.findRoomById)

router.route("/")
      .get(rooms.findAll)

module.exports = router;
