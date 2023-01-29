// 메소드 체이닝 : 메소드 여러개를 묶어 마치 채인처럼 짜여진 형태
// -> Element.method()1.method2().method3()...

// Ex) 메소드 체이닝을 통한 문자열 뒤집기
const str1 = "Hello~";
// split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열을 뒤집어서 반환
// join : 배열을 인수 기준으로 문자로 병합해 반환
const str2 = str1.split("").reverse().join(""); // -> str2에 str1이 뒤집힌 형태의 문자열이 저장 됨

console.log(str1);
console.log(str2);
