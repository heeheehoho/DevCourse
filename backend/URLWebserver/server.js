const http = require('http');
// URL 클래스를 사용하기 위해 'url' 모듈 임포트
const { URL } = require('url');

function start(route, handle){
    function onRequest(request, response){
        // request.url은 전체 URL이 아니라 경로와 쿼리 문자열만 포함하므로,
        // 전체 URL을 구성하기 위해 기본 호스트 이름을 추가합니다.
        const myURL = new URL(request.url, `http://${request.headers.host}`);
        let pathname = myURL.pathname;
        route(pathname, handle, response);
    }
    http.createServer(onRequest).listen(8888);
}

exports.start = start;
