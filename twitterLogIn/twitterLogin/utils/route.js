'use strict';
const multer			= require('multer'),
	path 				= require('path'),	
	crypto 				= require('crypto'),
	conf				= require(path.resolve(`./config/env/${process.env.PROJECT_ENV}`));

exports.saveImage = (data) => {
	return multer({    
	    storage: multer.diskStorage({
	    	destination: conf.image_destination,
	    	filename:  (req, file, cb)=> {
	    		cb(null, `${Date.now()}${crypto.randomBytes(6).toString('hex')}${conf.image_extensions[file.mimetype]}`);
	  		}
	    })    
	}).any();
}