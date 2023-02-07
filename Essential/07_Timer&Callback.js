// Timer Function
console.log("Timer Function")

// setTimeOut(function, time(ms)) : 일정 시간 후 함수 실행
// setInterval(function, time(ms)) : 시간 간격마다 함수 실행
// clearTimeout(setTimeOut()) : 설정된 Timeout 함수를 종료
// clearInterval(setInterval()) ; 설정된 Interval 함수를 종료


//setTimeOut 
setTimeout(function(){
    console.log("setTimeout")
}, 500)

setTimeout(() => {
    console.log("setTimeoutArrow")
}, 1000)

const setTimeOut_timer = setTimeout(() => {
    console.log("setTimeOut_timer")
}, 2000)

// document에서 "clear-time-out"클래스를 가진 요소를 찾아 clearTimeoutEl에 지정
const clearTimeoutEl = document.querySelector(".clear-timeout")
// h1El에 대해 "click"이벤트 발생 시 -> setTimeOut_timer라는 setTimeOut함수를 종료
clearTimeoutEl.addEventListener("click", () => {
    clearTimeout(setTimeOut_timer)
})


// setInterval
const setInterval_timer = setInterval(() => {
    console.log("setInterval_timer")
}, 3000)

// document에서 "clear-interval"클래스를 가진 요소를 찾아 clearIntervalEl에 지정
const clearIntervalEl = document.querySelector(".clear-interval")
// h1El에 대해 "click"이벤트 발생 시 -> setTimeOut_timer라는 setTimeOut함수를 종료
clearIntervalEl.addEventListener("click", () => {
    clearTimeout(setInterval_timer)
})



// Callback : 함수의 인수로 사용되는 함수
// ex) setTimeOut(function, time(ms))

// 함수를 매게변수로 받는 함수 : timeout
function timeout(callback_function){
    setTimeout(() => {
        console.log("timeout() start")
        callback_function()
    }, 5000)
}

// timeout호출 시 Arguments(args)를 Arrow Function의 형태로 줌
timeout(() => console.log("timeout Done"))