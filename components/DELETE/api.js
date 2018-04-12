const express = require('express');
const DELETERouter = express.Router();

const DELETEService = require('./service');


DELETERouter.delete('/:id', (req, res) => {

    DELETEService.removeUser(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        })
});


module.exports = DELETERouter;
