const arr = [1,2,3,4,5]

// 객체 또는 배열에서 요소를 하나 꺼낸 다음 불리는 콜백함수
const forEachArr = arr.forEach(function(a, b, c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`)
    return a * 2
})
console.log(arr)

const mapArr = arr.map(function(a, b, c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`)
    return a * 2
})
console.log(arr)

console.log(`foreach: ${forEachArr}`)
console.log(`map: ${mapArr}`)