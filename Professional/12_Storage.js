// Local Storage : 사이트에 종속되는 데이터. 반영구적임. 브라우져 세션 간에 공유됨 
// 문자 데이터로 변환하여 저장하여야 함

// Sesstion Storage : 페이지의 세션이 끝난경우(페이지를 닫을 경우) 삭제 됨

const user = {
    name: "ches",
    age: 24,
    email: "ches0703@naver.com"
}



// Local Storage에 데이터 저장

// JSON.stringify()을 통해 저장을 원하는 데이터를 문자열로 변환
const user_str = JSON.stringify(user)

// 문자열로 저장된 데이터를 "user"라는 키로 local storage에 저장
localStorage.setItem("user", user_str)



// Local Storage에서 데이터 가져오기

// localStorage.getItem()을 이용하여 "user"라는 키를 가진 문자열 형테의 데이터 가져오기
const getItem = localStorage.getItem("user")

// JSON.parse()를 이용하여 문저열 형테의 데이터를 객체 데이터로 변환
const obj = JSON.parse(getItem)

console.log(obj)



// Local Storage의 데이터 수정
localStorage.setItem("edit_data", user_str)

// "edit_data"라는 키를 가진 데이터 가져오기
const editObj_str = localStorage.getItem("edit_data")

// 가져온 문자열 데이터를 객체데이터로 변환
const editObj = JSON.parse(editObj_str)

// 데이터 수정후 객체를 문자열 형태로 변환하여 다시 저장
editObj.age = 25
localStorage.setItem("edit_data", JSON.stringify(editObj))



// Local Storage에서 데이터 지우기
localStorage.setItem("rm_data", user_str)

// localStorage.removeItem()를 이용하여 "rm_data"라는 키를 가진 데이터 삭제 
localStorage.removeItem("rm_data")
