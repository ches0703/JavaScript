// 함수 선언
function helloFunc(){
    console.log("Hello world!");
}

// 함수 호출
helloFunc(); // -> Hello world!



// 함수의 값 반환
function returnFunc(){
    return 1;   // 1 return
}

console.log(returnFunc());  // -> 1



// Parameter(매개변수)가 있는 함수
function sum(a, b){    // Parameter = a, b
    return a + b;       // a와 b의 합 return
}
let a = sum(1, 1);
let b = sum(1, 3);
let c = sum(10, 7);

console.log(a, b, c);  // -> 2 4 17



// 기명 함수 : 이름이 있는 함수
// 함수 선언
function hello(){
    console.log("hello");
}

// 익명 함수 : 이름이 없는 함수, 데이터로 활용되거나 변수에 할당하여 사용
// 함수 표현
let world = function(){     // world라는 변수에 익명 함수를 할당
    console.log("world");
}

hello();
world();



// 객체 내부의 함수 : Method(메소드)
const ches = {
    name: "CHES",
    age: 24,
    getName: function(){    // Method : 익명 함수로 표현
        return this.name
    },
};

console.log(ches.getName());



