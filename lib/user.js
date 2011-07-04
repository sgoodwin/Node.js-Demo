var redis = require("redis"),
    client = redis.createClient();

function User(hash){
	if(hash !== undefined){
		this.key = hash.key;
	}
}

User.prototype.save = function(callback){
	client.sadd('users', this.key, function(err, result){
		callback(true);
	});
};

User.exists = function(key, cb){
	if(key === undefined){cb(false);}
	client.sismember("users", key, function(err, exists){
		console.log('exists: ' + exists);
		if(exists === 0){ cb(false);}
		if(exists === 1){ cb(true);}
	});
};

module.exports = User;