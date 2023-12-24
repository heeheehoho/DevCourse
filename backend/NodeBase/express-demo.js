const express = require('express')  //express 모듈 임포트
const app = express()   // 함수 호출, 새로운 Express 애플리케이션 인스턴스 생성

app.get('/', function (req, res) {  //루트 URL ('/')에 대한 GET 요청을 처리하는 핸들러 설정
  res.send('Hello World')   
})

// API : GET + "http://localhost:3000/test"
// TEST ACCESS
app.get('/test', function (req, res) {  //루트 URL ('/')에 대한 GET 요청을 처리하는 핸들러 설정
    res.send('Test')   
  })
  
// API : GET + "http://localhost:3000/test/1"
// ONE!!
app.get('/test/1', function (req, res) {  //루트 URL ('/')에 대한 GET 요청을 처리하는 핸들러 설정
    res.send('One!!')   
  })  
  
app.listen(3000)    //서버가 3000번 포트에서 듣기(listen)를 시작