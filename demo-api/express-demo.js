const express = require('express')
const app = express()

app.listen(3000)

app.get('/', function (req, res) {
    res.json(book)
  })

let book = {
  title: "종훈 책",
  price: 20000,
  description: "이 책 좋음"
}