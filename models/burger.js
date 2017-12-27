var orm = require('../config/orm.js');
var burger = {
	all: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res); 
		});
	},
	create: function(burger_name, cb) {
		orm.insert('burgers', ['burger_name'], burger_name, function(res) {
			cb(res); 
		}); 
	},
	update: function(objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function(res) {
			cb(res);
		});
	}
}

module.exports = burger;