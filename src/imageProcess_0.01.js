'use strict';
exports.__esModule = true;

var sharp = require('sharp');


const resizeImage= async function () {sharp('assets/images/encenadaport.jpg')
	.resize({ width: 100 })
	.jpeg()
	.toFile('assets/images/encenadaSmall.jpg', (err, info) => {
		console.log(info);
		console.log(err);
	});};
    
        
resizeImage();