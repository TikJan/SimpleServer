const express = require('express');
const PUTRouter = express.Router();

const PUTService = require('./service');


PUTRouter.put('/:id', (req, res) => {

    PUTService.updateUser(req.params.id, req.body)
    .then(user => {
        res.send(user);
    })
    .catch(err => {
        res.send(err);
    })
});


module.exports = PUTRouter;
