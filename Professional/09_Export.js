// export : JS파일의 내용(함수, 데이터, 객체 등)을 외부로 보낼 수 있음
// Default 혹은 Named통로로 내용을 내보냄

// Default : 
    // 기본적인 통로로 하나의 내용만 내보낼 수 있음
    // 내용(함수, 데이터, 객체 등)의 이름을 따로 지정하지 않아도 됨
export default () => {
    console.log("Default export")
}




// Named : 
    // Named 통로로 내용을 내보냄
    // 여러개의 내용(함수, 데이터, 객체 등)을 보낼 수 있으며, 각 내용의 이름이 명시 되어야 함

// 함수
export function namedFunc(){
    console.log("Named export")
}

// 데이터
export const PI = 3.141592

// 객체
export let user = {
    name: "ches",
    age: 24,
    email: "ches0703@naver.com"
}

