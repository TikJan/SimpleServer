const PUTDao = require('./private/dao');

class PUTService {

    updateUser(user_id, newUser){

        return new Promise((resolve, reject) => {
            PUTDao.updateUser(user_id, newUser)
            .then(users => {
                return resolve(users);
            })
            .catch(err => {
                return reject(err);
            });
        });
    }

}

module.exports = new PUTService();
