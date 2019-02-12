var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    passwordvalid: String
})

module.exports = mongoose.model('User', UserSchema);