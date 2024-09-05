const arr = [1,2,3,4,5]

let map = new Map()
map.set(7, "seven")
map.set(9, "nine")
map.set(8, "eight")

map.forEach(function(a){
    console.log(`a: ${a}`)
})