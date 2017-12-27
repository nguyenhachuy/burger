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

router.post('/burgers/create', function(req, res) {
	console.log("what");
	burger.create([req.body.burger_name], function(data) {
		res.redirect('/');
	});
});

router.put('/burgers/update', function(req, res) {
	var condition = 'id=' + req.body.burger_id;
	burger.update({ devoured: true }, condition, function(result) {
		res.redirect('/');
	});
});
module.exports = router;