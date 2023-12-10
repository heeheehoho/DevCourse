const http = require('http');

const onRequest = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hello Node.js');
};

const startServer = () => {
    const server = http.createServer(onRequest);
    server.listen(8888, () => {
        console.log('Server is running on http://localhost:8888');
    });
};

module.exports = startServer;
