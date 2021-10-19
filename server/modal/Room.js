const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomName: { type: String, unique: true, required: true },
  chatLog :{type: Array, default: []}
});

module.exports = mongoose.model("Room", roomSchema);
