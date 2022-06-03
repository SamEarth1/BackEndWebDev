var express = require('express');
var router = express.Router();
const axios = require('axios');
const {response} = require('express');
/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', {data:response.data});
});
router.get('/submit', function(req, res){
  const city = req.query.city
  const url_api=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=00a9b598f16c926e93b63cb042a5a6cb`
  axios.get(url_api)
  .then(function(reponse) {
      res.render('index', {data:response.data})
  })
  .catch(function(error){
      res.send(error)
  });
});
module.exports = router;
