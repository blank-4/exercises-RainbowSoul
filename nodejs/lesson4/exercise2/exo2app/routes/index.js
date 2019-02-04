var express = require('express');
var router = express.Router();
var result = 0;

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: "Express"});
  var name = 'CurrentDate';
  var value = new Date(Date.now());
  var options = {
    expires: new Date(Date.now() + 900000),
    httpOnly: true
  };
  res.cookie(name, value, options);
  if(req.session.refresh) {
    req.session.refresh++;
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>Nombre de refresh: ' + req.session.refresh + '</p>')
    res.end()
  } else {
    req.session.refresh = 1
    res.end('Demo session. Refresh pour voir.');
  }
});

router.get('/users', function(req, res) {
  var cookieTheme = req.cookies['CurrentDate'];
  console.log(cookieTheme);
  if(cookieTheme) {
    result = result + 1;
    console.log(result);
    res.render('users', { cookie: cookieTheme, refresh: result });
  } else {
    res.render('users', { cookie: "Jamais" });
  }
})

module.exports = router;
