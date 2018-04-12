const mongoose = require('mongoose');

let connection = mongoose.createConnection('mongodb://localhost/Test');

require('./../../BaseDao/users');

let Users = connection.model('users');


class DeleteDao {

    removeUser(user_id, newUser) {
        return new Promise(function(resolve, reject) {
            Users.deleteOne({_id: user_id})
            .then(data => {
                return resolve(data);
            }).catch(err => {
                return reject(err);
            })
        });
    }
}

module.exports = new DeleteDao();
