const express = require('express')
const app = express()

app.get('/products/:n', function (req, res) {
    // n이라는 변수로 활용
    let number = parseInt(req.params.n) - 10
    console.log(number)
    

    res.json({
        num: number
    })
        
  })

//app.get('/:nickname', function(req, res) {

    //const param = req.params

   // res.json({
        //channel : param.nickname
   // })
//})

app.get('/watch', function(req, res) {
    const q = req.query
    console.log(q.v)
    console.log(q.t)

    res.json({
        video : q.v,
        timeline : q.t
    })
})

app.listen(3000)