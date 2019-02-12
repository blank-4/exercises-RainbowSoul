const express = require('express');
var UsersController = require('../controllers/UsersController')
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.post('/', UsersController.create)

module.exports = router;
