var User = require('../models/UsersModel');
var bcrypt = require('bcrypt');

class UsersController {
    create(req, res) {
        var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(req.body.username == "" || req.body.username.length < 2 || req.body.username.length > 25) {
            res.render('index', { errormsg: "Votre nom d'utilisateur doit comporter entre 2 et 25 caractères !" });
        } else if(req.body.firstname == "" || req.body.firstname.length < 2 || req.body.firstname.length > 25) {
            res.render('index', { errormsg: "Votre prénom doit comporter entre 2 et 25 caractères !" });
        } else if(req.body.lastname == "" || req.body.lastname.length < 2 || req.body.lastname.length > 25) {
            res.render('index', { errormsg: "Votre nom doit comporter entre 2 et 25 caractères !" });
        } else if(req.body.email == "" || mailformat.test(req.body.email) == false) {
            res.render('index', { errormsg: "Indiquez une adresse mail valide !" });
        } else if(req.body.password == "") {
            res.render('index', { errormsg: "Indiquez un mot de passe valide !" });
        } else if(req.body.passwordvalid == "") {
            res.render('index', { errormsg: "Validez votre mot de passe !" });
        } else if(req.body.password != req.body.passwordvalid) {
            res.render('index', { errormsg: "Vos mots de passe ne correspondent pas !" });
        } else {
            var newUser = new User({
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                passwordvalid: bcrypt.hashSync(req.body.passwordvalid, 10)
            })
            console.log(bcrypt.compareSync(req.body.password, newUser.password));
            console.log(bcrypt.compareSync(req.body.passwordvalid, newUser.passwordvalid));
            newUser.save().then((savedUser) => { res.json(savedUser) }).catch(() => { res.json({ error: true }) })
        }
    }
    async list(req, res) {
        try {
            let user = await User.find({
                username: req.query.username
            }).exec()
            res.json(user)
        } catch (err) {
            console.log(err);
            res.json({ error: true })
        }
    }
}

module.exports = new UsersController();