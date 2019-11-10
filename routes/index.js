var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yongho Kim' });
});

router.post('/login', function(req, res, next) {
	console.log('login!!!')
	console.log(req.body.id)
	console.log(req.body.password)
	console.log(req.body)
  res.send({result:'login complete', 
  	id:req.body.id,
  	password:req.body.password
  })
});

router.post('/register', function(req, res, next) {
  res.send({result:'register complete'})
});

module.exports = router;
