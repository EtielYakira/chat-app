var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io")(http); 
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var roomsRouter = require('./routes/rooms');
const { updateChat } = require('./controllers/rooms.controller');

var app = express();
const server = http.createServer(app);



mongoose.connect(
  "mongodb+srv://etl:etl1234@cluster0.7s0pz.mongodb.net/chat_app?retryWrites=true&w=majority", 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);

socketIO.on('connection', function(socket){
	socket.on('event://send-message', function(msg){
		console.log("got", msg);
		
		const payload = JSON.parse(msg);
		updateChat
		
		socket.broadcast.emit('event://get-message', msg);
	})
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin:'localhost:8000'
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rooms', roomsRouter);

module.exports = app;
