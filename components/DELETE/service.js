const DELETEDao = require('./private/dao');

class DELETEService {

    removeUser(body){
        let user_id = body.id

        return new Promise((resolve, reject) => {

            DELETEDao.removeUser(user_id)
            .then(users => {
                return resolve(users);
            })
            .catch(err => {
                return reject(err);
            });
        });
    }

}

module.exports = new DELETEService();
