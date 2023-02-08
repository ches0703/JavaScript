// Destructuring Assignment
// 구조 분해 할당(비구조화 할당)
// 객체 데이터를 구조 분해하여 원하는 속성만 꺼내어 사용

const user = {
    name: "ches",
    age: 24,
    email: "ches0703@naver.com"
}
console.log("user : ", user)

const {name: nick_name, age, adress = "korea"} = user
// 원하는 값만 꺼내어 사용 가능
// 기존의 Object.property형식으로 사용도 가능은 함 : user.email
// dfault 값을 지정할 수 있음 : adress = "korea"
// property의 이름을 따로 지정 가능 : name: nick_name

console.log("user's name : ", nick_name)    // ches
console.log("user's age : ", age)           // 24
console.log("user's email : ", user.email)  // ches0703@naver.com
console.log("user's address : ", adress)    // korea(default값이 없을 경우 undefined)



// 배열 객체의 구조 분해
let arr = ["Apple", "Banana", "Cherry"]
const [A, B, C, D] = arr    // 단 객체와 다르게 "[]"사용
console.log("A = ", A)  // Apple
console.log("B = ", B)  // Banana
console.log("C = ", C)  // Cherry
console.log("D = ", D)  // undefined

// 배열 객체의 구조 분해 시 특정 요소만 꺼낼 경우
// Ex) Cherry만 꺼내는 경우
const [,,Cherry_only] = arr
console.log("Cherry_only = ", Cherry_only)