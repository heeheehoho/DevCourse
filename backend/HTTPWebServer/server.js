const http = require('http');   //node.js의 http 모듈을 불러온다 -> server-client 기능 제공
const url = require('url');

function start(route) {
    const onRequest = (request, response) => {
        let pathname = url.parse(request.url).pathname;
        route(pathname);

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('Hello Node.js');
    }
    http.createServer(onRequest).listen(8888);
}

exports.start = start;
