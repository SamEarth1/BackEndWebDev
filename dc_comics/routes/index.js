var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET comic1 page. */
router.get('/comic1', function(req, res, next) {
  res.render('comic1');
});
/* GET comic2 page. */
router.get('/comic2', function(req, res, next) {
  res.render('comic2');
});

module.exports = router;
