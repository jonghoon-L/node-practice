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

app.get("/youtubers", function(req, res){
  var youtubers = {}
  db.forEach(function(value, key){
    youtubers[key] = value
  });

  res.json(youtubers)
})

app.get('/youtubers/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id) 
    const data = db.get(id)

    if(data == undefined){
      res.send("없는 유튜버입니다")
    } else{
      res.json(data)
    }

})

app.listen(3000)

app.use(express.json()) // http 외 모듈인 미들웨어 중에서도 json 설정 모듈

app.post('/youtubers', function (req, res) {
  console.log(req.body)

  db.set(id++, req.body)

  res.json({
    message: `${db.get(id-1).channelTitle} 님, 회원님의 유튜브가 개설되었습니다!`
  })
  
})

app.delete('/youtubers/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id) 
    
    if (db.get(id) == undefined) {
      res.json({
        message: "없는 유튜버입니다"
    })} else {
      const name = db.get(id).channelTitle
      db.delete(id)

      res.json({
        message: `${name}님, 회원님의 정보가 삭제되었습니다.`
    })
  }

})

app.delete('/youtubers', function(req, res){

  if(db.size == 0){
    res.json({
      message: "현재 삭제할 유튜버가 없습니다"
    })} else {
    db.clear()
    res.json({
      message: "전체 유튜버가 삭제 되었습니다."
    })
}})

app.put('/youtubers/:id', function(req, res){
  let {id} = req.params
  id = parseInt(id) 
  
  var youtuber = db.get(id)
  var oldTitle = youtuber.channelTitle
  if (db.get(id) == undefined) {
    res.json({
      message: "없는 유튜버입니다"
  })} else {
    var newTitle = req.body.channelTitle

    youtuber.channelTitle = newTitle
    db.set(id, youtuber)

    res.json({
      message: `${oldTitle}님, 회원님의 정보가 ${newTitle}로 수정되었습니다.`
  })
}
})