const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.json(book)
  })

app.listen(3000)

let book = {
  title: "종훈 책",
  price: 20000,
  description: "이 책 좋음"
}