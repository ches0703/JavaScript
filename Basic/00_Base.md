# 출력(Print)
- console.log()를 사용하여 출력

Example :
```javascript
// 문자열 출력
console.log("Hello world"); 

// 변수를 출력
let A = 123;
console.log(A);             
```

>Hello world  
>123



# 변수 선언 시 -> var, let, const 사용

- var : 변수 중복선언 가능
- let : 변수 중복선언 불가능. 재할당은 가능
- const : 중복선언, 재할당 불가. 상수

Example :
```javascript
var A = 10;
var A = "A";    // 가능

let B = 10;
// let B = "B"; // 오류
B = "B";        // 재할당은 가능

const C = 3.14;
// const C = 3.141592;  // 오류
// C = 10;              // 오류
```

---