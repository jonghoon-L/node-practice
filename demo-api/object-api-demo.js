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

app.get('/:nickname', function(req, res) {

    const {nickname} = req.params

    if (nickname == "znhxxn") {
        res.json(youtuber1)
    } else if(nickname == "znhxxn2") {
        res.json(youtuber2)
    } else if(nickname == "teo") {
        res.json(youtuber3)
    } else {
        res.json("그런 채널이 없네요")
    }
    
})

app.listen(3000)