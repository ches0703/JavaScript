// HTML 문서(document) 내의 특정 클래스를 가진 요소(Element)
// 1개를 찾아 반환하는 메소드 : querySelector

// Ex) HTML문서 내의 "box"라는 클래스를 가진 요소 1개를 찾아 boxEl에 할당
let boxEl = document.querySelector(".box");

// boxEl을 console로 출력
console.log(boxEl);





// HTML 요소에 이벤트를 추가하는 메소드 : addEventListener
// Element(이벤트를 추가 할 요소).addEventListener(Event(추가 할 이벤트 종류), Handler(이벤트 발생 시 실행할 함수));

// Ex) "click"에 대한 인베트 추가
// "click"에 대한 이벤트 발생 시 내부의 익명함수가 실행 됨(이 때의 익명함수를 Handler라고 함)
boxEl.addEventListener("click", function(){
    console.log("box : click event");
});






// HTML 요소의 클래스 정보 활용: classList

// 요소에 클래스 추가 : classList.add(class name)
// Ex) boxEl에 "active" 클래스 추가
boxEl.classList.add("active");

// 요소에 특정 클래스의 존재여부 확인 : classList.contains(class name)
// Ex) boxEl에 "active" 클래스 존재여부 확인
let isContains = boxEl.classList.contains("active"); 
console.log(isContains);    // -> true

//  요소에 특정 클래스를 제거 : classList.remove(class name)
// Ex) boxEl에 "active" 쿨래스 제거
boxEl.classList.remove("active");
isContains = boxEl.classList.contains("active");
console.log(isContains);    // -> false





// HTML 문서(document) 내의 특정 클래스를 가진 요소(Element)
// 모두를 찾아 유사 배열 형태로 반환하는 메소드 : querySelectorAll

// Ex) HTML문서 내의 "boxes"내부의 "box"라는 클래스를 가진 요소 모두를 찾아 boxEls에 할당
const boxEls = document.querySelectorAll(".boxes .box");

// 찾은 요소들을 통한 반복 : forEach
// 익명 함수를 인수로 추가 가능
// Ex) Els.forEach(funtion(){})

// 또한 익명함수의 매개변수를 설정하여 함수 내부에서 사용가능
// 첫 번째 매개변수 : 현재 반복중인 요소
// 두 번째 매개변수 : 현재의 반복 횟수
// Ex) Els.forEach(funtion(El, index){})

// Ex) "boxes"내부의 "box"라는 클래스를 가진 요소에 순서 번호 클래스 추가 및 출력
boxEls.forEach(function(boxEl, index){
    boxEl.classList.add(`order-${index}`);
    console.log(boxEl)
});





// 특정 요소 내부의 text 변수 : textContent

// Ex) "text-box"라는 클래스의 text값을 출력 및 수정

// HTML문서 내의 "text-box"라는 클래스를 가진 요소를 찾아 "textBoxEl"에 할당
const textBoxEl = document.querySelector(".text-box")

// Getter : 값을 얻는 용도로 사용하는 경우
console.log(textBoxEl.textContent); // -> text-box

// Setter : 값을 지정하는 용도로 사용하는 경우
textBoxEl.textContent = "TEXT-BOX"  // -> 화면 출력 내용 변경
console.log(textBoxEl.textContent); // -> TEXT-BOX