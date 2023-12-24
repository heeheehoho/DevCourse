const express = require('express')
const app = express()

// 블로그1 주소 : https://jungheeho.tistory.com/
// 블로그2 주소 : https://suddiyo.tistory.com/ 

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

app.get('/:nickname', function (req, res) {
    const { nickname } = req.params

    if (nickname == "jungheeho") {
        res.json(blogger1)
    }
    else if (nickname == "suddiyo") {

        res.json(blogger2)
    }
    else{
        res.json({
            message : "해당 내용 없음"
        })
    }
})
app.listen(3000)