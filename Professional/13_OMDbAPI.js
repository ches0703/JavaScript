// OMDbAPI사용하여 영화의 정보 받아오기
// API : https://www.omdbapi.com/?apikey=7035c60c&s=frozen
//    -> apikey : API를 이용하기 위해 사용자가 발급받아야 하는 키
//    -> &s=frozen : search 옵션, "frozen"검색 결과를 가져 옴


// Node.js에서 API를 사용하기위해 사용하는 통신 라이브러리
import axios from "axios"

// 영화들을 가져오는 함수
function fetchMovies(){
    // Method Chaining
    axios
        // API를 통한 데이터 요청
        .get("https://www.omdbapi.com/?apikey=7035c60c&s=frozen")
        .then( res => { // 요청에 의해 받은 데이터를 callback하여 처리
            console.log(res)
            // HTML문서 내에서 h1 & img 태그를 가진 요소를 찾음
            const h1El = document.querySelector("h1")
            const imgEl = document.querySelector("img")

            // API를 통해 받은 데이터를 이용하여 h1El의 텍스트, imgEl의 src 값을 변경
            h1El.textContent = res.data.Search[0].Title
            imgEl.src = res.data.Search[0].Poster
        
        })
}
fetchMovies()