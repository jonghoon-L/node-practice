const express = require('express')
const { get } = require('express/lib/response')
const app = express()

app.get('/hello', function (req, res) {
    res.json({
      say: "안녕하세요"
      })
  })

app.get('/bye', function (req, res) {
    res.json({
      say: "잘가요"
      })
  })

app.get('/nicetomeetyou', function (req, res) {
    res.json({
      say: "만나서 반가워"
      })
  })

app.listen(3000)