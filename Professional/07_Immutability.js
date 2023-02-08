// Immutability : 데이터 불변성

// 원시 데이터 : String, Number, Boolean, undefined, null
// 참조형 데이터 : Object, Array, Function


// 원시 데이터의 경우 : 데이터가 불변성을 가짐
// 메모리의 형태
// [1 : ] [2: ] [3: ] [4: ]

let a = 1   // 메모리의 1번 자리에 1이라는 값 생성 및 변수 a는 1번을 가리킴
            // a -> [1 : 1] [2: ] [3: ] [4: ]

let b = 7   // 메모리의 2번 자리에 7이라는 값 생성 및 변수 b는 2번을 가리킴
            // a -> [1 : 1] b -> [2: 7] [3: ] [4: ]

a = b       // a가 가리키는 1번 자리의 값을 7로 바꾸는게 아닌 a가 가리키는 값을 b가 가리키는 값으로 변경
            // [1 : 1] a,b -> [2: 7] [3: ] [4: ]

let c = 1   // 3번 자리에 1이라는 값을 생성하고 c가 3번 을 가리키는것이 아닌
            // c를 기존의 1이라는 값을 가지고 잇던 1번자리를 가리키도록 함
            // c -> [1 : 1] a,b -> [2: 7] [3: ] [4: ]

// a === b -> true(가르키는 값이 같으므로)

// 즉 기존의 데이터는 변하지 않음 : 데이터의 불변성



// 참조형 데이터의 경우 : 데이터가 가변적임
// 메모리의 형태
// {1 : } {2: } {3: } {4: }


let O_a = {k: 1}    // 메모리의 1번에 객체 데이터가 생성되고, a는 1번을 카리킴
                    // a -> {1 : {K: 1}} {2: } {3: } {4: }


let O_b = {k: 1}    // 메모리의 2번에 객체 데이터가 생성되고, b는 2번을 카리킴
                    // a -> {1 : {K: 1}} b -> {2: {K: 1}} {3: } {4: }

// 즉 원시 데이터와 달리 참조형 데이터의 경우 새로운 값을 생성 시 마다 새로운 메모리에 할당
// a === b -> false(가르키는 주소가 다르므로)

O_b = O_a           // b가 메모리의 1번의 가리키게 됨
                    // a,b -> {1 : {K: 1}} {2: {K: 1}} {3: } {4: }

O_a.k = 2           // a가리키는 k의 값을 2로 바꿈
                    // * 중요! :  b.k의 값도 2로 바뀜(a와 b가 같은 객체를 가리키므로) *

// 즉 원시데이터의 경우 메모리의 데이터가 불벽적이고, 변수가 가리키는 메모리의 주소를 변경하면서 값을 바꾼것에 비에
// 참조형의 경우 메모리 내부의 값이 변경될수 있으며(가변적), 이를 통한 주의점이 요구됨






