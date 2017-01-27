'use strict';

module.exports = {
	db: {
		URL: "mongodb://localhost/TwitterLogin",
		options: {
			user: '',
			pass: ''
		}
	},
    image_extensions : {
      'image/jpeg' : '.jpg',
      'image/jpg' : '.jpg',
      'image/png' : '.png',
      'image/gif' : '.gif'
    },	
    image_destination: 'public/uploads',    	
};