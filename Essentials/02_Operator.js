// 산술 연산자(Arithmetic Operator)
console.log("Arithmetic Operator")

console.log("1 + 2 = ", 1 + 2)  // plus     -> 3 
console.log("7 - 2 = ", 7 - 2)  // minus    -> 5
console.log("3 * 4 = ", 3 * 4)  // multiply -> 12
console.log("4 / 2 = ", 4 / 2)  // devide   -> 2
console.log("7 % 5 = ", 7 % 5)  // modulo   -> 2



// 할당 연산자(Assignment Operator)
console.log("Assignment Operator")

let Assignment_a = 2
console.log("a = 2, a = ", Assignment_a)
Assignment_a += 1  // == [ a = a + 1 ]
console.log("a += 1, a = ", Assignment_a)



// 비교 연산자(Comparlson Operator)
console.log("Comparlson Operator")

console.log("a = 1, b = \"1\", c = 3")
const Comparlson_a = 1
const Comparlson_b = "1"
const Comparlson_c = 3

// == : 동등 연산자. 두 개의 피연산자가 동일한지 확인하며, Boolean값을 반환
//      다른 타입의 피연산자들끼리의 비교 지원. 부정 연산자 -> "!="
// ex) a = 1, b = "1"이라면 "a == b"는 true

// === : 일치 연산자. 두개의 데이터타입의 동등여부까지 검사. 
//       따라서 피연산자의 데이터타입이 다를 경우 "false"를 반환. 부정 연산자 -> "!=="
// ex) a = 1, b = "1"이라면 "a == b"는 false

console.log("a == b = ", Comparlson_a == Comparlson_b)     // true
console.log("a === b = ", Comparlson_a === Comparlson_b)   // false
console.log("a != b = ", Comparlson_a != Comparlson_b)     // false
console.log("a !== b = ", Comparlson_a !== Comparlson_b)   // true

console.log("a < c = ", Comparlson_a < Comparlson_c)    // true
console.log("a <= b = ", Comparlson_a <= Comparlson_b)   // true



// 논리 연산자(Logical Operator)
console.log("Logical Operator")

console.log("a = true, b = true, c = false, d = false")
const Logical_a = true
const Logical_b = true
const Logical_c = false
const Logical_d = false


// && : AND
console.log("a && b = ", Logical_a && Logical_b)
console.log("a && c = ", Logical_a && Logical_c)

// || : OR
console.log("a || b = ", Logical_a || Logical_b)
console.log("a || c = ", Logical_a || Logical_c)
console.log("c || d = ", Logical_c || Logical_d)

// ! : NOT
console.log("!a = ", !Logical_a)
console.log("!c = ", !Logical_c)



// 삼항 연사자(Ternary Operator)
console.log("Ternary Operator")

console.log("a = true")
const Ternary_a = true

console.log("a ? 1 : 0 = ", Ternary_a ? 1 : 0)


