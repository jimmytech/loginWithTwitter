'use strict';

const mongoose = require('mongoose'),
    path = require('path'),
    conf = require(path.resolve(`./config/env/${process.env.PROJECT_ENV}`)),
    userModel = require(path.resolve('./models/userModel'));

exports.upload = (req, res) => {
    let body = req.body;
    let img = {
        original_name: req.files[0].originalname,
        path: req.files[0].path
    };
    body.data.image = img;
    let user = body.data;
    let userDetail = new userModel(user);
    userDetail.save((err, result) => {
        console.log(result);
        if (result) {
            res.status(200).json({
                success: true,
                result: result.image.path
            });
        } else {
            success: false
        }
    });
};


exports.twitterCallback = (req, res) => {
    res.send("This is twitterCallback")
};