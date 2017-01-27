'use strict';

const path = require('path'),
    index = require(path.resolve('./controllers/index')),
    myFunction = require(path.resolve('utils/route')),
    express = require('express'),
    user = express.Router(),
    admin = express.Router();


user.post('/upload', myFunction.saveImage(), index.upload);
// user.post('/twitter_callback', twitterCallback);

module.exports = {
    user: user,
    admin: admin
};