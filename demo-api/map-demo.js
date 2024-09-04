const express = require('express')
const app = express()

app.get('/:p', function (req, res) {
    let {p} = req.params
    p = parseInt(p)

    if(db.get(p) == undefined) {
        res.json({
            message: "없는 상품"
        }) 
    } else {
        product = db.get(p)
        product.p = p
        res.json(product)
            }
})

let db = new Map()

app.listen(3000)

let notebook = {
    productName : "노트북",
    price : 2000000
}

let cup = {
    productName : "컵",
    price : 3000
}

let chair = {
    productName : "의자",
    price : 300000
}

let poster = {
    productName : "포스터",
    price : 100000
}

db.set(1, notebook) // Key로 Value를 찾을 수 있는 쌍으로 매핑
db.set(2, cup)
db.set(3, chair)
db.set(4, poster)