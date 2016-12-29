/*
Here is where you create all the functions that will do the routing for your app, 
and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	models.Burgers.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	models.Burgers.create(['burger_name', 'devoured'], [req.body.name, false], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);
	console.log(req.body)

	models.Burgers.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});


module.exports = router;