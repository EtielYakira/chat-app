const Room = require("../modal/Room");
const User = require("../modal/Room");

exports.findRoomById = async (req, res) => {
    const room = await User.findOne({_id: req.params.id})
    res.send(room)
    };

exports.findAll = async (req, res) => {
	res.send(await Room.find())
}

exports.updateChat = async (req,res) => {
    const room = await Room.findOne({_id: req.params.id})
    room.chatLog.push({username: req.body.username, msg:req.body.msg})
    await room.save()
}