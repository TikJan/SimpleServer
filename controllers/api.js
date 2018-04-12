const express = require('express');

const GETApi = require('./../components/GET/api');
const POSTApi = require('./../components/POST/api');
const PUTApi = require('./../components/PUT/api');
const DELETEApi = require('./../components/DELETE/api');

class ApiV1 {
    initialize(app) {


        app.use('/api/GET', GETApi);
        app.use('/api/POST', POSTApi);
        app.use('/api/PUT', PUTApi);
        app.use('/api/DELETE', DELETEApi);
    };
};

module.exports = new ApiV1();
