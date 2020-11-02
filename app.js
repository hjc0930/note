const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

http.createServer(function (req, res) {

    let pathname = url.parse(req.url).pathname;
    let extName = path.extname(pathname);


    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');