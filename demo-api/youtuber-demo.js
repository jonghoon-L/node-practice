const express = require('express')
const app = express()

let youtuber1 = {
  channelTitle : "종훈",
  sub : "100만명",
  videoNum : "99개"
}

let youtuber2 = {
  channelTitle :"종훈2",
  sub : "90만명",
  videoNum : "8개"
}

let youtuber3 = {
  channelTitle :"Teo",
  sub : "200만명",
  videoNum : "8000개"
}

let db = new Map()
var id = 1

db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)

app.get("/yout", function(req, res){
  res.json(db)
})

app.get('/youtuber/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id) 
    const data = db.get(id)

    if(data == undefined){
      res.send("없는 유튜버")
    } else{
      res.json(data)
    }

})

app.listen(3000)

app.use(express.json()) // http 외 모듈인 미들웨어 중에서도 json 설정 모듈

app.post('/youtuber', function (req, res) {
  console.log(req.body)

  db.set(id++, req.body)

  res.json({
    message: `${db.get(id-1).channelTitle} 님, 회원님의 유튜브가 개설되었습니다!`
  })
  
})