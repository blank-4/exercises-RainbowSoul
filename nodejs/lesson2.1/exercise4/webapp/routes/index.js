var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
   title: 'Express',
   ip: req.ip,
   host: req.host,
   method: req.method,
   path: req.path,
   headers: {
     hhost: req.header("host"),
     hcontent: req.header("content-type"),
     huser: req.header("user-agent"),
     hreferer: req.header("referer"),
     hdate: req.header("date"),
    }
  });
  console.log(req.headers)
});

module.exports = router;