var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: `It's Blank !`, message: 'Hello there!'});
});

module.exports = router;