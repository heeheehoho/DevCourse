const http = require('http');   // Node.js의 http 모듈을 불러옴
const url = require('url');     // Node.js의 url 모듈을 불러옴

function start(route, handle) {
    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;
        route(pathname, handle);

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('Hello Node.js');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
