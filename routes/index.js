var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yongho Kim' });
});

router.get('/login', function(req, res, next) {
  res.send({result:'login complete'})
});

router.get('/register', function(req, res, next) {
  res.send({result:'register complete'})
});

module.exports = router;
