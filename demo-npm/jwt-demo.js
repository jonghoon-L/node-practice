var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
// token 생성(jwt 서명)

console.log(token);

// 검증
// 만약 검증에 성공하면, 페이로드 값 확인 가능
var decoded = jwt.verify(token, 'shhhhh');
console.log(decoded)