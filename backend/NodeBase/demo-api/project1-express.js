const express = require('express')
const app = express()

// 게시글 클릭 : https://jungheeho.tistory.com/58
// 게시글 클릭 : https://suddiyo.tistory.com/entry/Spring-Kafka-%EC%B1%84%ED%8C%85-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-1

// 유튜브 영상 : https://www.youtube.com/watch?v=_6X8i6KM8_Q&t=227s
// JSON 객체의 비구조화
app.get('/watch', function (req, res) {
    const { v, t } = req.query
    console.log(q.v)
    console.log(q.t)

    res.json({
        video: v,
        timeline: t

    })
})
app.listen(3000)