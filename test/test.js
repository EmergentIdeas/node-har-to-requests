var fs = require('fs')
var har = require('../index')

var data = fs.readFileSync('./test/black-label-bacon.har')
var requests = har(data.toString())
if(requests.length != 36) {
	exit(1)
}
