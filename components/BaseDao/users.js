const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    firsname: String,
    lastname: String,
    birthdate: Date,
    address: String,
    address2: String,
    country: String,
    city: String,
    postalCode: String
});

module.exports = mongoose.model('users', UserSchema);
