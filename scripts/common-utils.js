module.exports = {

	bytesToSize: function(bytes) {
	   var sizes = ['Bytes', 'kB', 'MB', 'GB', 'TB'];
	   if (bytes == 0) return '0 Bytes';
	   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	   return Math.round(bytes / Math.pow(1000, i), 2) + ' ' + sizes[i];
	}

}