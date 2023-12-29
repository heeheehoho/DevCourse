const express = require('express')  //express 모듈 임포트
const app = express()   // 함수 호출, 새로운 Express 애플리케이션 인스턴스 생성

app.get('/', function (req, res) {  //루트 URL ('/')에 대한 GET 요청을 처리하는 핸들러 설정
  res.send('Main Page')
})

/*
!!!!!! 객체 전달 !!!!!
*/

// API : GET + "http://localhost:3000/heeho"
// 1 
app.get('/heeho', function (req, res) {
  res.json({
    name: "HeeHo",
    age: 23,
    description: "Sejong Univ."

  })
})

// 2
let nodeBook = {
  title: "Let's get started with studying Node",
  price: 20000,
  description: "This is about ~ "
}
app.get('/book', function (req, res) {
  res.json(nodeBook)
})

// 3.
// products/ㅇㅇ  빈칸에 오는 값을 n이라는 변수에 담기
// JavaScript는 다른 언어와 다르게 숫자, 문자 구분 X 
app.get('/products/:n', function (req, res) {
  // console.log(req.params.n)
  let number = parseInt(req.params.n) - 10
  res.json({
    num: number
  })
})


app.listen(3000)    //서버-3000번 포트

/*
<서버 실행>
1. 오른쪽 위 실행 버튼
2. json 파일에 코드 추가 후 npm start
3. 아래 명령어 실행
 node "/Users/jungheeho/Desktop/programmers/DevCourse/backend/NodeBase/express-demo.js"
*/