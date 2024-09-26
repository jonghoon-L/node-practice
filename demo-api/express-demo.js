const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

app.listen(process.env.PORT)

app.get('/', function (req, res) {
    res.json(book)
  })

let book = {
  title: "종훈 책",
  price: 20000,
  description: "이 책 좋음"
}