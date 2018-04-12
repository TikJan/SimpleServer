const express = require('express');
const POSTRouter = express.Router();

const POSTService = require('./service');


POSTRouter.post('/', (req, res) => {
    let options = {};

    POSTService.addUser(req.body, options).then(user => {
        res.send(user);
    })
    .catch(err => {
        res.send(err);
    })
});


module.exports = POSTRouter;
