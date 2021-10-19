const User = require("../modal/User");

exports.findUserById = async (req, res) => {
    const user = await User.findOne({_id: req.params.id})
    res.send(user)
    };

    
exports.login = async (req, res) => {
    const user = await User.findOne({username: req.body.username})
    if(user && user.password === req.body.password){
        res.send(user)
    }else{
        res.status(401).send("try again")
    }
    
    };



exports.addUser = async (req, res, next) => {
    console.log(req.body);
    if(await User.findOne({username: req.body.username})){
        res.status(409).send('Username "' + req.body.username + '" is already taken')
    }else{
        const user = new User({
            username: req.body.username,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            password: req.body.password
        })
    
        await user.save()
        res.send(user)
    }
}

exports.findAll = async (req, res) => {
	res.send(await User.find())
}
exports.deleteUser = async (req, res) => {
    try{
    await User.deleteOne({ _id: req.params.id })
	res.status(204).send()
    } catch{
		res.send({ error: "User doesn't exist!" })
    }
}