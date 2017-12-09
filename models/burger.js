var orm = require('../config/orm.js');
var burgers = {
	all: function(cb) {
		orm.selectAll('burger', function(res) {
			cb(res) 
		});
	},
	create: function(burger_name, cb) {
		orm.insertOne('burger', ['burger_name'], burger_name, function(res) {
			cb(res); 
		}); 
	},
	update: function(objColVals, condition, cb) {
		orm.update('burger', objColVals, condition, function(res) {
			cb(res);
		});
	}
}

module.exports = burger;