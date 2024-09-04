const express = require('express')
const { get } = require('express/lib/response')
const app = express()

app.get('/test', function (req, res) {
    res.json({
      say: "Test"
      })
  })

app.get('/test/1', function (req, res) {
    res.json({
      say: "One"
      })
  })

app.listen(3000)

