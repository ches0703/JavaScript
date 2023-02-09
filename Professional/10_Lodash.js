// Lodash

import _, { concat } from "lodash"



// lodash.uniq() : 배열의 중복요소를 제거한 세로운 배열 반환
console.log("lodash.uniq()")

const arr = [1, 1, 2, 3, 4, 3]
console.log("arr = [1, 1, 2, 3, 4, 3]")

console.log("_.uniq(arr) = ", _.uniq(arr))


// lodash.uniqBy() : 배열의 중복요소를 제거할 시 요소가 객체인 경우 사용
console.log("lodash.uniqBy()")

const Users1 = [{ID : 1, name: "A"}, {ID: 2, name: "B"}]
const Users2 = [{ID : 1, name: "A"}, {ID: 3, name: "C"}]

console.log("Users1 = ", Users1)
console.log("Users2 = ", Users2)

const Users3 = concat(Users1, Users2)
console.log("Users3 = concat(Users1, Users2)")
console.log("Users3 = ", Users3)

const Users4 = _.uniqBy(Users3, "ID")   // 중복요소를 제거할 배열, 중복체크를 할 속성
console.log("Users4 = _.uniqBy(Users3, \"ID\")")
console.log("Users4 = ", Users4)


// lodash.unionBy : 배열의 합치면서 중복요소(객체 포함) 제거
const Users5 = _.unionBy(Users1, Users2,"ID")
console.log("Users5 = _.unionBy(Users1, Users2, \"ID\")")
console.log("Users5 = ", Users5)




const fruitsTable = [
    {ID : 1, name: "Aapple"},
    {ID : 2, name: "Banana"},
    {ID : 3, name: "Cherry"},
    {ID : 4, name: "Orange"},
]

// lodash.find() : 객체 배열에서 지정한 속성과 값을 가지는 객체요소를 찾아서 반환
console.log("lodash.find()")

const foundFruits = _.find(fruitsTable, {name: "Cherry"})
console.log("foundFruits = _.find(fruitsTable, {name: \"Cherry\"})")
console.log("foundFruits = ", foundFruits)


// lodash.findIndex() : 객체 배열에서 지정한 속성과 값을 가지는 객체요소의 Index값을 반환
console.log("lodash.findIndex()")

const foundFruitsIndex = _.findIndex(fruitsTable, {name: "Cherry"})
console.log("foundFruitsIndex = _.findIndex(fruitsTable, {name: \"Cherry\"})")
console.log("foundFruitsIndex = ", foundFruitsIndex)



// lodash.remove() : 객체 배열에서 지정한 속성과 값을 가지는 객체요소를 제거
console.log("lodash.remove()")

_.remove(fruitsTable, {name: "Orange"})
console.log("_.remove(fruitsTable, {name: \"Orange\"})")
console.log("fruitsTable = ", fruitsTable)