import getType from "./01__getType"

// typeof : 데이터의 타입을 알려 줌
console.log(typeof "hello world")   // string
console.log(typeof 123)             // number
console.log(typeof true)            // boolean
console.log(typeof undefined)       // undefined
// typeof는 null, array, object를 object로 표현
console.log(typeof null)            // object
console.log(typeof {})              // object
console.log(typeof [])              // object



console.log(getType("hello world"))   // [object String]
console.log(getType(123))             // [object Number]
console.log(getType(true))            // [object Boolean]
console.log(getType(undefined))       // [object Undefined]
console.log(getType(null))            // [object Null]
console.log(getType({}))              // [object Object]
console.log(getType([]))              // [object Array]
