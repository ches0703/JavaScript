// JSON(JavaScript Object Notation) : 각종 데이터를 문자형태로 저장하는 데이터포멧

// 속성-값 쌍(attribute–value pairs), 배열 자료형(array data types) 또는
// 기타 모든 시리얼화 가능한 값(serializable value) 또는 "키-값 쌍"으로 이루어진
// 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷
// 인터넷에서 자료를 주고 받을 때 그 자료를 표현하는 방법으로 알려져 있다.
// 자료의 종류에 큰 제한은 없으며, 특히 컴퓨터 프로그램의 변수값을 표현하는 데 적합하다.
// 언어 독립형 데이터 포맷
// 경량화를 위해 문자열 형테로 데이터가 관리됨

// 자바스크립트의 객체데이터 작성법과 유사하나, Key(property)의 이름을 ""로 감싸야 함
// 또한 문자열의 경우 ""만 사용 하여야 함

// import를 통한 JSON파일 불러오기
import MyData from "./11__MyData.json"

// JSON파일은 문자열 형태의 데이터를 가지고 있지만
// import로 추가 시 포멧규칙에 의해 자동 변환되어 객체 데이터처럼 사용가능
console.log(MyData)


// JSON객체(전역객체 임)사용
// JSON파일의 문자열 형태 출력
const str = JSON.stringify(MyData)
console.log(str)


// 문자열 형태의 JSON파일을 JSON.parse를 통한 객체데이터 전환
const obj = JSON.parse(str)
console.log(obj)