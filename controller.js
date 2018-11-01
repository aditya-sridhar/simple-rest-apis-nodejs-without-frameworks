const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname == '/sample') {

        service.sampleRequest(req, res);

    } else if (reqUrl.pathname == '/test') {

        service.testRequest(req, res);

    } else {

        service.invalidRequest(req, res);
        
    }
});