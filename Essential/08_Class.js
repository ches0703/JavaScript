// Class
// 생성자 함수와 객체의 prototype속성을 활용하여 instance를 생성하는 것
console.log("Class")

// User Class의 생성자 함수
function User(name, age){
    // Property
    this.name = name
    this.age = age
}
// Method
// prototype : 객체가 가진 Method의 집합. Method를 추가할 수 있음
// 각 객체가 Method를 따로 생성하는게 아닌 해당 Class의 prototype에 있는 Method를 참조하여 사용
User.prototype.getUserInfo = function(){    // User Class의 prototype에 getUserInfo라는 메소드를 추가
    return `Name = ${this.name}, Age = ${this.age}`
}


// Instance : new 키워드와 생성자 함수를 통해 할돵된 변수. Ches나 Amy는 instance임
const Ches = new User("Ches", 24)   // new 키워드와 생성자 함수를 통한 객체 데이터 생성
const Amy = new User("Amy", 26)

console.log(Ches)
console.log(Ches.getUserInfo())

console.log(Amy)
console.log(Amy.getUserInfo())



// this
// 일반 함수는 호출 위치에서 this정의
// Arrow function은 자신이 선언된 함수 범위에서 this 정의
console.log("This")

const thisTest_1 = {
    name: "thisTset_1",
    normal: function(){ // this.name이 thisTest라는 객체 내부의 데이터를 가리킴
        console.log(this.name)

    },
    arrow: () =>{       // this.name이 가리키는 것이 무엇인지 확인 불가
        console.log(this.name)
    }
}
thisTest_1.normal()   // thisTest_1
thisTest_1.arrow()    // undefined


const thisTest_2 = {
    name: "thisTest_2",
    normal: thisTest_1.normal,  // thisTest_1의 normal함수가 thisTest_2에 할당
    arrow: thisTest_1.arrow     // thisTest_1의 arrow함수가 thisTest_2에 할당
}
thisTest_2.normal()   // thisTest_2
thisTest_2.arrow()    // undefined


function thisTest_3(name){
    this.name = name
}
thisTest_3.prototype.normal = function(){
    console.log("this.name in normal : ", this.name)
}
thisTest_3.prototype.arrow = () =>{
    console.log("this.name in arrow : ", this.name)
}

const testing = new thisTest_3("testing(thisTest_3)")
testing.normal()
testing.arrow()


const timer = {
    str: "timer",
    timeout_normal: function(){
        setTimeout( function() {
            console.log("Normal : ", this.str)  // undefined
            // this는 호출 위치에 따라 정의되므로 setTimeout내부에 callback되어 실행 됨
            // 이때 setTimeout에 "str"이라는 변수가 있다면 그 값을, 없을 경우 undefined을 출력함
        }, 10000)
    },
    timeout_arrow: function(){
        setTimeout( () => {
            console.log("Arrow : ", this.str)   // timer
        }, 10000)
    } 
}
timer.timeout_normal()
timer.timeout_arrow()



// ES6 Classes
console.log("ES6 Classes")

const ES6 = {
    func1: function(){
        console.log("func1")
    },
    // ": function" 생략 가능
    func2(){    
        console.log("func2")
    }
}

// ES6에서 지원하는 class문법
// prototype사용 대신 Method를 추가할 수 있음
class ES6_User {
    // 생성자
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // Method
    getUserInfo(){
        return `Name = ${this.name}, Age = ${this.age}`
    }
}
const ES6_Ches = new ES6_User("Ches", 24)
console.log(ES6_Ches.getUserInfo())