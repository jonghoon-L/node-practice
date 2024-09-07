const express = require('express')
const app = express()

app.listen(3000)

const fruits = [
    { id: 1, name: "apple"},
    { id: 2, name: "orange"},
    { id: 3, name: "strawberry"},
    { id: 4, name: "blueberry"}
]

app.get('/fruits', function(req, res){
    res.json(fruits)
})

app.get('/fruits/:id', (req, res) => {
    const id = req.params.id
    // let fruit = fruits[id]
    var findFruit = 
        fruits.find(f => f.id == id)

    if(findFruit){
        res.json(findFruit)
    } else {
        // 예외를 터뜨린다 = http status code 실패를 알려줌
        res.status(404).send(
            "찾으시는 과일이 없습니다"
        )
    }

})