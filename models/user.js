var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/game")
var user_schema = new Schema({
	email: String,
	password: String,
	name: String
});

var User = mongoose.model("User", user_schema);

module.exports.User = User;