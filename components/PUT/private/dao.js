const mongoose = require('mongoose');

let connection = mongoose.createConnection('mongodb://localhost/Test');

require('./../../BaseDao/users');

let Users = connection.model('users');


class PutDao {

    updateUser(user_id, newUser) {
        return new Promise(function(resolve, reject) {
            Users.find({
                    _id: user_id
                })
                .update(newUser)
                .setOptions({overwrite: true})
                .then(data => {
                    return resolve(data);
                }).catch(err => {
                    return reject(err);
                })
        });
    }
}

module.exports = new PutDao();
