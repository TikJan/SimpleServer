const mongoose = require('mongoose');

let connection = mongoose.createConnection('mongodb://localhost/Test');

require('./../../BaseDao/users');

let Users = connection.model('users');

function getAllUsers() {
    return new Promise(function(resolve, reject) {
        Users.find({}).then(data => {
            return resolve(data);
        }).catch(err => {
            return reject(err);
        })
    });
}

module.exports = {
    getAllUsers: getAllUsers
};
