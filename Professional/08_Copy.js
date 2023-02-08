import _ from "lodash"

// Copy

const user = {
    name: "ches",
    age: 23,
    grade: ["B", "A+", "A"]
}


// 대입 연산자를 사용 시
console.log("Assignment Operator")

const assignment = user
console.log("assignment = user")
console.log("assignment === user = ", assignment === user)

user.age = 24   // "user"라는 Object의 age를 변경하였지만 assignment의 age또한 변경됨(같은 주소를 가리키므로)
console.log("user.age = ", user.age)
console.log("assignment.age = ", assignment.age)



// Shallow Copy(얕은 복사)
console.log("Shallow Copy")

const shallow_copy1 = Object.assign({}, user)   // Object.assign()을 사용하여 얕은 복사
const shallow_copy2 = {...user}                 // Spread를 통해서도 가능

shallow_copy1.age = 25
shallow_copy2.age = 26

console.log("user.age = ", user.age)                    // 24
console.log("shallow_copy1.age = ", shallow_copy1.age)  // 25
console.log("shallow_copy2.age = ", shallow_copy2.age)  // 26

// 참조형 데이터 내부에 참조형 데이터를 가지고 있는 경우
// 얕은 복사를 진행하더라도 내부의 참조형 데이터가 제대로 복사가 안됨
user.grade[0] = "A+"
console.log("user.grade[0] = ", user.grade[0])                    // A+
console.log("shallow_copy1.grade[0] = ", shallow_copy1.grade[0])  // A+
console.log("shallow_copy2.grade[0] = ", shallow_copy2.grade[0])  // A+



// Deep Copy(깊은 복사) : 내부의 참조형 데이터 까지 복사 진행
// lodash라는 package사용 : cloneDeep()
console.log("Deep Copy")

const Deep_copy = _.cloneDeep(user)

user.grade[2] = "A+"

console.log("user.grade[2] = ", user.grade[2])
console.log("Deep_copy.grade[2] = ", Deep_copy.grade[2])

console.log(user)
console.log(Deep_copy)
