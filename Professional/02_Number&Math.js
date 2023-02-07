// Number에 관한 전역 함수


// toFixed : 소숫점 자리 지정, String형태로 반환
console.log("toFixd")

const PI = 3.141592
console.log("PI = ", PI)

console.log("PI.toFixed(2) = ", PI.toFixed(2))
console.log("typeof PI.toFixed(2) : ", typeof PI.toFixed(2))



// Parse
// parseInt : 문자열을 읽어  Number(integer)로 반환
// parseFloat : 문자열을 읽어  Number(float)로 반환 
console.log("Parse")

const PI_Fixed_2 = PI.toFixed(2)
console.log("PI_Fixed_2 = PI.toFixed(2)")

const PI_Int = parseInt(PI_Fixed_2)
console.log("PI_Int = parseInt(PI_Fixed_2) = ", PI_Int)
console.log("typeof PI_Int : ", typeof PI_Int)

const PI_Float = parseFloat(PI_Fixed_2)
console.log("PI_Float = parseFloat(PI_Fixed_2) = ", PI_Float)
console.log("typeof PI_Float : ", typeof PI_Float)




// Math



// Math.abs(number) : 주어진 Number의 절댓값 반환
console.log("Math.abs(-12) = ", Math.abs(-12))

// Math.max(num1, num2, ...) : arguments로 들어온 Number 중 큰 값 반환
console.log("Math.max(-2, 5, -1) = ", Math.max(-2, 5, -1))

// Math.min(num1, num2, ...) : arguments로 들어온 Number 중 작은 값 반환
console.log("Math.min(-2, 5, -1) = ", Math.min(-2, 5, -1))

// Math.ceil : 올림
console.log("Math.ceil(3.14) = ", Math.ceil(3.14))

// Math.floor : 내림
console.log("Math.floor(3.14) = ", Math.floor(3.14))

// Math.round : 반올림
console.log("Math.round(3.14) = ", Math.round(3.14))

// Math.random() : 0 ~ 1 사이의 랜덤한 실수 반환
console.log("Math.random() = ", Math.random())


