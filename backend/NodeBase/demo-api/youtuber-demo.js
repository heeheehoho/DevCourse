/*
object-api-demo.js 파일 참고
*/

//express 모듈 세팅
const express = require('express')
const app = express()
app.listen(3000)

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
let db = new Map()
db.set(1, blogger1)
db.set(2, blogger2)

//REST API 설계
app.get('/blogger/:id', function (req, res) {
    let { id } = req.params
    id = parseInt(id)
    if (db.get(id) == undefined) {
        res.json({
            message: "찾을 수 없음"
        })
    }
    else {
        res.json(db.get(id))
    }

    res.json(db.get(id))
})
