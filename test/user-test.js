var path = require('path');

require.paths.unshift(path.join(__dirname, '..', 'lib'));
require.paths.unshift(path.join(__dirname, '..', 'node_modules'));

var vows = require('vows'),
		assert = require('assert'),
		User = require('user');


vows.describe('user').addBatch({
	"The User model": {
		topic: function(){
			var newUser = new User({'key':'abcd'});
			newUser.save(this.callback);
		},
		"Should save a new user": function (topic) {
			assert.strictEqual(topic, true);
		},
		"Making sure the user exists": {
			topic: function(){
				User.exists('abcd', this.callback);
			},
			"Should show that user exists": function(topic){
				console.log('topic: ' + topic);
				assert.strictEqual(topic, true);
			}
		},
	}
}).export(module);