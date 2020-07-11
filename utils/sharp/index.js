const sharp = require('sharp');

sharp('javascript.png')
	.resize(100)
	.toFile('resized.png');