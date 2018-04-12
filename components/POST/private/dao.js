const mongoose = require('mongoose');

let connection = mongoose.createConnection('mongodb://localhost/Test');

require('./../../BaseDao/users');

let Users = connection.model('users');

function addUser(user) {
    return new Promise(function(resolve, reject) {
        Users.create(user).then(data => {
            // console.log(data);
            return resolve(data);
        }).catch(err => {
            return reject(err);
        })
    });
}

module.exports = {
    addUser: addUser
};
