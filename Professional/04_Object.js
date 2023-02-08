// Object

// Object.prototype.Method() -> Prototype Method
// Object.Method() -> 정적(Static) Method



// Object.assign() : 하나 이상의 출처 객체로 부터 대상 객체로 복사 
// Object.assign(target, src1, src2, src3, ...)
console.log("Object.assign()")

let target = {
    a: 1,
    b: 2
}
console.log("target : ", target)

let src = {
    b: 20,
    c: 30
}
console.log("src : ", src)

let resulte = Object.assign(target, src)
console.log("resulte = Object.assign(target, src)")
// 원본 데이터를 유지하면서 병합된 새로운 객체를 만들고 싶다면
// let resulte = Object.assign({}, src1, src2)와 같이 사용 가능

console.log("resulte : ", resulte)
console.log("target : ", target)
console.log("resulte === target : ", resulte === target)    
// target과 resulte는 같은 메모리에 저장된 값을 가리키므로 true


// Extra Test
const Ex1 = {a: 1}
console.log("Ex1", Ex1)
const Ex2 = {a: 1}
console.log("Ex2", Ex1)
console.log("Ex1 == Ex2", Ex1 === Ex2)  // -> false. 모양은 같으나 실제 메모리에서 가르키는 값이 다르므로



// Object.keys() : Object의 Property의 이름을 추출하여 배열의 형태로 생성하여 반환
console.log("Object.keys()")

const user = {
    name: "ches",
    age: 24,
    email: "ches0703@naver.com"
}
console.log("user : ", user)

const keys = Object.keys(user)
console.log("keys = Object.keys(user)")
console.log("keys : ", keys)    // ['name', 'age', 'email']


// Object의 indexing
console.log("user[\"name\"] = ", user["name"])


// .keys와 Array의 map을 통해 객체의 정보를 배열 형태로 저장하는 법
const user_info__arr = keys.map(key => user[key])
console.log("user_info__arr = keys.map(key => user[key])")
console.log("user_info__arr = ", user_info__arr)    // ['ches', 24, 'ches0703@naver.com']
