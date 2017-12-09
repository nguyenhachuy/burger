var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

router.get('/', function(req, res) {
	burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
	});
});

router.post('/api/burgers', function(req, res) {
	burger.create([req.body.name], function(data) {
		res.json({});
	});
});

router.put('/api/burgers/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	burger.update({ devoured: req.body.devoured }, condition, function(res) {
		if(res.changedRows == 0) {
			return res.status(404).end();
		}
		else return res.status(200).end();
	});
});
module.exports = router;