var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	results = [
		{ 
			id : 52, 
			datetime : "2019-11-04 13:20:01", 
			writer : 11, 
			comment : "good morning"
		}, 
		{ 
			id : 53, 
			datetime : "2019-11-04 13:22:30", 
			writer : 13, 
			comment : "it’s very cold."
		}
	]
  	res.send(results)
});

module.exports = router;
