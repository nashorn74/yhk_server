var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	results = [
		{ 
			id : 120, 
			name : "Star wars", 
			type : "movie"
		}, 
		{ 
			id : 121, 
			name : "Just give me a reason", 
			type : "song" 
		}
	]
  	res.send(results)
});

module.exports = router;
