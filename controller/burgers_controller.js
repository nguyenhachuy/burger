var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get('/', function(req, res) {
	burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
	});
});

router.post('/', function(req, res) {
	burger.create([req.body.burger_name], function(data) {
		res.redirect('/');
	});
});

router.put('/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	burger.update({ devoured: req.body.devoured }, condition, function(res) {
		res.redirect('/');
	});
});
module.exports = router;