// Spread : 전개 연산자


let arr = ["Apple", "Banana", "Cherry", "Orange"]
console.log("arr = ", arr)

console.log("...arr = ", ...arr)    // 전개 하여 출력 됨 -> arr =  Apple Banana Cherry
// -> console.log("...arr = ", "Apple", "Banana", "Cherry")



function toObject(a, b, ...c){  // Args로 Object를 생성하여 반환 
                                // Rest Parameter : c에 나머지 배열의 원소가 지정됨
    return {
        a: a,   // "Apple"
        // property와 parameter의 이름이 같으면 다음과 같이 표현 가능
        b,      // "Banana"
        c: c    // ["Cherry", "Orange"]
    }
}

// 화살표 함수와 위의 축약표현을 활용하여 코드를 다음과 같이 줄일 수 있음
const toObjectArrow = (a, b, ...c) => ({a, b, c})

console.log(toObject(...arr))   // 배열을 전개하여 toObject의 Args로 주어 객체로 반환받음
// -> console.log(toObject(arr[0], arr[1], arr[2] ...))

console.log(toObjectArrow(...arr))