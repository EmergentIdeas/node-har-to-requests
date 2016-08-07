var _ = require('lodash')

var harToRequests = function(harData) {
	if(typeof harData == 'string') {
		harData = JSON.parse(harData)
	}
	
	var requests = []
	_.each(harData.log.entries, function(entry) {
		requests.push(entry.request.url)
	})
	
	return requests
}

module.exports = harToRequests