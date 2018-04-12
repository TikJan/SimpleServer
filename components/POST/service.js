const POSTDao = require('./private/dao');

class POSTService {

    addUser(user, options){
        return new Promise((resolve, reject) => {
            options = options || {};

            POSTDao.addUser(user, options)
            .then(user => {
                return resolve(user);
            })
            .catch(err => {
                return reject(err);
            });
        });
    }

}

module.exports = new POSTService();
