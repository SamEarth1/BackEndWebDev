var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rated R' });
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});
router.get('/index', function(req, res, next) {
  res.render('index');
});
router.post('/submit', function(req, res) {
  let name = req.body.name
  let email = req.body.email
  let number = req.body.number
  fs.appendFile(`data.txt`, `name: ${name}, email: ${email}, number: ${number}\n`, function(e){
    if(e) {
    console.log(e);
  }
})
});
module.exports = router;
