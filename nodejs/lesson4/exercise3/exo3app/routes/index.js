var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Express"});
});

router.post('/', function(req, res) {
  if(req.body.firstname == "") {
    res.render('index', { errormsg: "Veuillez entrer votre prénom." });
  } else if(req.body.lastname == "") {
    res.render('index', { errormsg: "Veuillez entrer votre nom." });
  } else if(req.body.email == "") {
    res.render('index', { errormsg: "Veuillez entrer votre adresse mail." });
  } else {
    var name = "CookieMail";
    var value = req.body.email;
    var options = {
      expires: new Date(Date.now() + 900000),
      httpOnly: true
    }
    res.cookie(name, value, options);
    req.session.firstName = req.body.firstname;
    req.session.lastName = req.body.lastname;
    var firstName = req.session.firstName;
    var lastName = req.session.lastName;
    var sess = {
      username: firstName,
      password: lastName
    }
    console.log("Utilisateur :", sess);
    res.render('index', { errormsg: "Votre inscription a été soumise." });
  }
});

module.exports = router;
