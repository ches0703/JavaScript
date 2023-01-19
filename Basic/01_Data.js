// String : 문자열
let name = "ches";
console.log(name);  // -> ches

// " ` "기호 사용시 보간법 지원
let hello = `Hello ${name}`;
console.log(hello); // -> Hello ches



// Nmber : 숫자
// 정수형
let integer = 3;
console.log(integer);   // -> 3

// 실수형 
let float = 3.14;
console.log(float);     // -> 3.14



// Boolean : true 혹은 false값을 가짐
let T = true;
console.log(T); // -> true

let F = false;
console.log(F); // -> flase



// Undefined : 값이 할당되지 않은 상태
let undef;
console.log(undef); // -> undefined



// Null : 의도적으로 데이터가 비어있는 상태
let empty = null;
console.log(empty); //  -> null 



// Object : 객체
// Key : Value 형태로 저장
let user = {
    name: "ches",
    age: 24
};
console.log(user);      // -> {name: 'ches', age: 24}
console.log(user.name); // -> ches 
console.log(user.age);  // -> 24
console.log(user.grade);// -> undefined



// Array : 배열
let arr = [1, 2, 3];
console.log(arr[0]);    // -> 1
console.log(arr[1]);    // -> 2
console.log(arr[2]);    // -> 3
