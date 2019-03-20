const {
	packDirectory,
} = require('lbry-format');

packDirectory('./src', {
	fileName: 'pixelboard.lbry',
})