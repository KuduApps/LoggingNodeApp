var http = require('http');

http.createServer(function (req, res) {
    console.log('writing response headers1');
    res.writeHead(200, {'Content-Type': 'text/html'});
   console.log('writing response');
    res.end('Hello, world Dinesh! [helloworld sample; iisnode version is ' + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
}).listen(process.env.PORT);  