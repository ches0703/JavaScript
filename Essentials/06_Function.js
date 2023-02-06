// Review
console.log("Review")

// 기명 함수
function sum_1(x, y){
    return x + y
}
console.log("sum_1(1, 2) = ", sum_1(1, 2))

// 익명 함수
const sum_2 = function(x, y){
    return x + y
}
console.log("sum_2(3, 7) = ", sum_2(3, 7))



// Arguments
console.log("Arguments")

function sum_args() {
    console.log("arguments = ", arguments)
    console.log("arguments[0] = ", arguments[0])
    console.log("arguments[1] = ", arguments[1])
    return  arguments[0] + arguments[1]
}
console.log("sum_args(2, 3) = ", sum_args(2, 3))



// Arrow Function
console.log("Arrow Function")

const double = function(x){
    return x * 2
}

console.log("double(7) = ", double(7))


// doubleArrow_1
const doubleArrow_1 = (x) => {
    return x * 2
}
console.log("doubleArrow_1(7) = ", doubleArrow_1(7))

// doubleArrow_2
const doubleArrow_2 = (x) => x * 2
console.log("doubleArrow_2(7) = ", doubleArrow_2(7))

// doubleArrow_3
const doubleArrow_3 = x => x * 2    // 단 Parameter가 1개 일때
console.log("doubleArrow_3(7) = ", doubleArrow_3(7))


// Arrow Funtion의 객체 반환 : ()로 Wrapping
const objectReturn = x => ({ name : "Ches", age : x })
console.log(objectReturn(24)) 



// IIFE : Immediately-Invoked Function Expression
// 즉시 실행 함수 : 생성즉시 실행 할 익명 함수(1회성)
console.log("IIFE : Immediately-Invoked Function Expression")

const IIFE_a = 2

// "()"로 Wrapping 후 끝에 "()"를 추가(단 앞 코드메 끝나는 지점을 명시해야 함(;))

// 1
;(function (){
    console.log(IIFE_a * IIFE_a)
})()

// 2
;(function (){
    console.log(IIFE_a * IIFE_a)
}())



// Hoisting : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
console.log("Hoisting")

// 함수의 선언부가 호출부보다 상대적으로 아래에 있다하여도 정상적으로 실행 됨 
hoistingFunction()

function hoistingFunction(){
    console.log("hoistingFunction()")
}
