function main(response) {
    console.log('main');
    response.writeHead(200, {'Content-Type' : 'text/html'})
    response.end('main page');
}

function login(response) {
    console.log('login');9
    response.writeHead(200, {'Content-Type' : 'text/html'})
    response.end('login page');
}

let handle = {};    // key:value
handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;