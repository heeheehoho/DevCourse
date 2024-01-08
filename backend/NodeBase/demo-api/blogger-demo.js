/*
object-api-demo.js 파일 참고
*/

//express 모듈 세팅
const express = require('express')
const app = express()

// JSON 형식의 요청 본문을 파싱하기 위한 미들웨어
app.use(express.json())

// 데이터 세팅
let blogger1 = {
    blogName: "jungheeho",
    view: "1104명",
    descrpition: "열공티비"

}
let blogger2 = {
    blogName: "suddiyo",
    view: "4946명",
    descrpition: "꾸준히 기록하고 성장하는 백엔드 개발자"

}
let blogger3 = {
    blogName: "third",
    view: "3333명",
    descrpition: "hello"

}
let db = new Map()  //map 객체인 db로 데이터 저장라는 데이터베이스 역할(id를 키로) / key-value형식
var id = 1
db.set(id++, blogger1)
db.set(id++, blogger2)
db.set(id++, blogger3)

// REST API 설계
app.get("/bloggers", function (req, res) {
    const bloggers = Array.from(db.values());
    res.json(bloggers);
});

app.get('/blogger/:id', function (req, res) {
    let { id } = req.params;
    id = parseInt(id);
    const blogger = db.get(id);
    if (blogger == undefined) {
        res.status(404).json({
            message: "블로거를 찾을 수 없음"
        });
    } else {
        res.json(blogger);
    }
});

app.post('/blogger', function (req, res) {
    const newBlogger = req.body;
    db.set(id++, newBlogger);
    res.json({
        message: `${newBlogger.blogName} 블로거 생활을 환영합니다!`
    });
});

app.listen(3000, () => {
    console.log("서버가 3000번 포트에서 시작되었습니다.");
});