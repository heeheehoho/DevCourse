const http = require('http');
const url = require('url'); // node.js기 제공하는 url이라는 모듈

function start(route, handle){
    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;
        route(pathname,handle);

        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.end('Hello Node.js');
    }
    http.createServer(onRequest).listen(8888);
}


exports.start = start;
