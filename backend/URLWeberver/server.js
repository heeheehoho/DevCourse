const http = require('http');
const url = require('url'); // node.js기 제공하는 url이라는 모듈

function start(){
    function onRequest = (request, response){
        let pathname = url.parse(request.url).pathname;
        console.log('pathname : '+pathname);

        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.end('Hello Node.js');
    }
    http.createServer(onRequest);
}


const startServer = () => {
    const server = http.createServer(onRequest).listen(8888);

};

exports.start = start;
