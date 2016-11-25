var express = require('express');
var bodyParser = require('body-parser');
var User = require('./models/user').User;
var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.get("/", function(req, res){
	res.render("home", {
		classes: "front, bodyDark"
	});
});
app.get("/sign-up", function(req, res){
	res.render("sign-up", {
		classes: "sign-up, bodyDark"
	});
});
app.get("/character", function(req, res){
	res.render("character", {
		classes: "character"
	});
});

app.listen(8080)