var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var results = [
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
  	res.send(results);
});

router.delete('/', function(req, res, next) {
	//res.send({result:'Delete Users complete!'})
	res.send(401, {error:"Unauthorised authentication failure"})
});

router.get('/:idnum', function(req, res, next) {
	var result = { 
		id : req.params.idnum, 
		name : "Michael", 
		email : "michael@aaa.com"
	}
	res.send(result)
});

module.exports = router;
