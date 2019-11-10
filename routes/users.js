var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'admin',
	password: 'password',
	database: 'my_db'
});
//connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
	connection.query('SELECT * FROM User', function(err, results) {
		if (err) res.send(401, err);
		else res.send(results)
	});
/*	var results = [
		{ 
			id : 12, 
			name : "Michael", 
			email : "michael@aaa.com" 
		}, 
		{ 
			id : 13, 
			name : "Oliver", 
			email : "oliver@bbb.com" 
		}
	]
  	res.send(results);*/
});

router.delete('/', function(req, res, next) {
	connection.query('DELETE FROM User', function(err, result) {
		if (err) res.send(401, err);
		else res.send(result)
	});
	//res.send({result:'Delete Users complete!'})
	//res.send(401, {error:"Unauthorised authentication failure"})
});

router.get('/:idnum', function(req, res, next) {
	var result = { 
		id : req.params.idnum, 
		name : "Michael", 
		email : "michael@aaa.com",
		image_url: "",
		age: 0,
		gender: "male"
	}
	res.send(result)
});

module.exports = router;
