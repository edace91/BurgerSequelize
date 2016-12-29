/*
Here is where you create all the functions that will do the routing for your app, 
and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/burgers', function(req, res) {
	models.Burgers.findAll({

	})
	.then(function(burgers) {
		res.render('index', {
			burgers: burgers
		})
	})
});



router.post('/burgers/create', function(req, res) {
	models.Burgers.create({
		burger_name: req.body.name
	})
	.then(function() {
		res.redirect('/');
	})
});



router.put('/burgers/update/:id', function(req, res) {
	models.Burgers.update(
		{devoured: req.body.devoured},
		{where: {id: req.params.id}
	})
	.then(function(result) {
		res.redirect('/');
	})
});


module.exports = router;