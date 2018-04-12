const GETDao = require('./private/dao');

class GETService {

    getUsers(options){
        options = options || {};

        return new Promise((resolve, reject) => {

            GETDao.getAllUsers(options)
            .then(users => {
                return resolve(users);
            })
            .catch(err => {
                return reject(err);
            });
        });
    }

}

module.exports = new GETService();
