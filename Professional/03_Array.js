// Array


// Literal을 통한 배열 객체 생성
let arr_1 = [1, 2, 3, 4]
let arr_2 = ["Apple", "Banana", "Cherry"]


// 배열 출력
console.log("Print Array")

console.log("arr_1 = ", arr_1)          // -> [1, 2, 3, 4]
console.log("arr_2 = ", arr_2)          // -> ['Apple', 'Banana', 'Cherry']



// 배열의 특정 위치의 요소 출력 : Array[index] -> indexing
// 배열 요소의 순서 : index
// index를 사용하여 배열의 요소 출력 : indexing
console.log("Indexing")

console.log("arr_1[1] = ", arr_1[1])    // -> 2
console.log("arr_2[0] = ", arr_2[0])    // -> Apple



// Array.length() : 배열의 길이 반환
console.log("Array.length()")

console.log("arr_1.length = ", arr_1.length)    // -> 4
console.log("arr_2.length = ", arr_2.length)    // -> 3



// Array.concat() : 두 배열을 합친 새로운 배열을 반환
console.log("Array.concat()")

console.log("arr_1.concat(arr_2) = ", arr_1.concat(arr_2))  // -> arr_1 + arr_2



// Array.forEach() : 배열의 요소의 갯수 만큼 Callback func실행.
// 이때 Arguments로 element, index, array가 순서대로 전달된다
console.log("Array.forEach()")

arr_1.forEach((element, index, array) => {    // <- Callback func: 함수의 인수로 사용되는 함수
    console.log("element", element, "index : ", index, "array : ", array)
} )



// Array.map() : forEaxh와 비슷한 특성을 가지면 Callback func에서 반환된 데이터를 가지고 새로운 배열을 만듬
console.log("Array.map()")

const arr_3 = arr_2.map((element, index) => {
    return `${index} - ${element}`
})
console.log("arr_3 = ", arr_3)  // -> ['0 - Apple', '1 - Banana', '2 - Cherry']


// .map()을 통한 객체 배열 생성
const arr_4 = arr_2.map((element, index) => ({  // Essential 06_Function의 Arrow func 참조 
    id: index, name: element
}))
console.log("arr_4 = ", arr_4)



// Array.filter() : 배열의 요소에 대해 조건은 반족하는 요소로만 새로운 배열을 생성하여 반환
console.log("Array.filter()")

const arr_5 = arr_1.filter(element => element < 3)
console.log("arr_5 = ", arr_5)  // -> [1, 2]



// Array.find() : 주어진 판별함수를 만족하는 첫번째 요소의 값 반환
// Array.findIndex() : 주어진 판별함수를 만족하는 첫번째 요소의 index값 반환
console.log("Array.find()")

// 정규표현식 사용 : 대문자 B로 시작하는 문자데이터
const El = arr_2.find(element => /^B/.test(element))
console.log("element starting with \"B\" : ", El)


console.log("Array.findIndex()")

const El_index = arr_2.findIndex(element => /^B/.test(element))
console.log("index of element starting with \"B\" : ", El_index)



// Array.includes() : 특정 요소의 표함여부를 반환
console.log("Array.includes()")

console.log("arr_1.includes(1) = ", arr_1.includes(1))  // true
console.log("arr_1.includes(7) = ", arr_1.includes(7))  // false



// Array.push() : 배열의 뒤쪽에 요소 삽입
// Array.unshift()  : 배열의 맨 앞에 요소 삽입
// 원본 배열이 수정 됨
console.log("Array.push()")

let arr_7 = [1,2,3,4]
console.log("arr_7 = ", arr_7)

arr_7.push(5)
console.log("arr_7.push(5)")
console.log("arr_7 = ", arr_7)


arr_7.unshift(0)
console.log("arr_7.unshift(0)")
console.log("arr_7 = ", arr_7)



// Array.reverse() : 배열의 순서를 뒤집음
// 원본 배열이 수정 됨
console.log("Array.reverse()")

let arr_8 = [1,2,3,4]
console.log("arr_8 = ", arr_8)

arr_8.reverse()
console.log("arr_8.reverse()")
console.log("arr_8 = ", arr_8)



// Array.splice()
// 배열의 특정위치부터 원하는 원소 갯수 만큼 제거 
// 특정 위치의 요소를 변경
// 요소를 특정 위치에 끼워넣기
console.log("Array.splice()")

let arr_9 = [1, 2, 3, 4, 5, 6, 7]
console.log("arr_9 = ", arr_9)

arr_9.splice(2, 3)  // index = 2부터 3개의 원소(3, 4, 5) 제거
console.log("arr_9.splice(2, 3)")
console.log("arr_9 = ", arr_9)

arr_9.splice(2, 0, 3, 4, 5) // index = 2부터 0개의 원소 제거 및 (3, 4, 5)요소 추가
console.log("arr_9.splice(2, 3)")
console.log("arr_9 = ", arr_9)
