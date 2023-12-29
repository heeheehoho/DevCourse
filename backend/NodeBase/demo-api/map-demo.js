const express = require('express')
const app = express()
app.listen(3000)

app.get('/:id', function (req, res) {
    let { id } = req.params //요청된 URL에서 id 매개변수의 값을 추출(무ㄴ자열 형태)

    id = parseInt(id)   // "숫자" => 숫자

    if (db.get(id) == "undefined") {
        res.json({
            message: "해당 내용 없음"
        })
    } else {
        // res.json({
        //     id: id,
        //     productName: db.get(id)
        // })
        product =  db.get(id)
        product.id = id
        res.json(product)
    }

    console.log(db.get(id)) 
    res.send("hi")
})

let db = new Map()

let notebook = {
    productName: "Notebook",
    price: 2000000
}
let cup = {
    productName: "cup",
    price: 500000
}

db.set(1, notebook)    //key, value 쌍 저장
db.set(2, cup)
db.set(3, "chair")

console.log(db)
console.log(db.get(2))
