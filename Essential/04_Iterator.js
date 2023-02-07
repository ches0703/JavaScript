// For Statement
// for(시작조건; 종료조건; 변화조건)

for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`)
}


// For문을 활용하여 index.html내부의 ul요소에 li요소 추가
const ulEl = document.querySelector("ul")   // document에서 ul태그 요소를 찾음

for(let i = 0; i < 10; i++){
    const li = document.createElement("li")     // li태그를 생성
    li.textContent = `li - ${i + 1}`            // 생성된 li태그의 내부 text값을 지정
    li.addEventListener("click", function() {   // 생성된 li태그에 "click"이벤트 추가
        console.log(li.textContent)             // 해당 요소 클릭시 요소 내부의 text값 출력
    })
    ulEl.appendChild(li)                        // 생성된 li태그를 ul태그의 자식요소로 지정
}