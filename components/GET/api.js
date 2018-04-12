const express = require('express');
const GETRouter = express.Router();

const GETService = require('./service');


GETRouter.get('/', (req, res) => {
    let options = {};

    GETService.getUsers(options).then(users => {
        res.send(users);
    })
    .catch(err => {
        res.send(err);
    })
});


module.exports = GETRouter;
