/*
Here is where you set up your server file.
express middleware.
*/
var models = require('./models');
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var app = express();


app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.get('/', function(req, res) {res.redirect('/burgers')})
app.use('/burgers', routes);

models.sequelize.sync();

var PORT = 8080;
app.listen(process.env.PORT || PORT);
console.log("local host:" + PORT);