var express = require('express');
var alert = require('alert-node');
var validator = require('validator');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res) {
  var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(req.body.lastname == "" || req.body.lastname.length > 30) {
    alert("Entrez votre nom si vous ne l'avez pas fait. Sinon votre nom doit contenir moins de 30 caractères.");
  } else if(req.body.firstname == "" || req.body.firstname.length > 30) {
    alert("Entrez votre prénom si vous ne l'avez pas fait. Sinon votre prénom doit contenir moins de 30 caractères.");
  } else if(req.body.age == "" || req.body.age < 0 || req.body.age > 100) {
    alert("Entrez votre âge si vous ne l'avez pas fait. Sinon c'est que vous n'êtes pas encore né ou sacrément vieux.");
  } else if(req.body.email == "" || mailformat.test(req.body.email) == false) {
    alert("Entrez votre adresse mail si vous ne l'avez pas fait. Sinon votre adresse mail doit suivre le format habituel exemple : 'nom@nomdedomaine.fr'.");
  } else {
    console.log([req.body]);
    alert("Inscription réussie !");
  }
})

module.exports = router;
