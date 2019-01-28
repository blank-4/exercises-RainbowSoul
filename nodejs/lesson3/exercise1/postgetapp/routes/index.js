var express = require('express');
var bodyparser = require('body-parser')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
  console.log([req.body]);
});
router.post('/', function(req, res) {
  console.log([req.body]);
})

module.exports = router;
