// String



// Literal을 통한 문자열 객체 생성("")
console.log("Literal")

const str_1 = "str_1"
console.log(str_1)



// Length
console.log("Length")

console.log("str_1.length = ", str_1.length)



// indexOf : String.prototype.indexOf()
// String객체에서 주어진 값과 일치하는 첫 번째 인데스를 반환. 일치하는 값이 없을 시 -1 반환환
console.log("indexOf")

const str_2 = "Hello world!"
console.log("search in \"Hello world!\"")
console.log("Index of \"world\" = ", str_2.indexOf("world"))    // 6
console.log("Index of \"JS\" = ", str_2.indexOf("JS"))          // -1



// Slice : String.prototype.slice(beginIndex, endIndex)
// beginIndex부터 endIndex직전까지 문자열을 잘라서 반환
console.log("Slice")

console.log("str_2 = ", str_2)
                                                        // [012]34567...
console.log("str_2.slice(0, 3)", str_2.slice(0, 3))     // [Hel]lo wo...
console.log("str_2.slice(6, 11)", str_2.slice(6, 11))   // world



// Replace : replace(대상 문자열, 대체 문자열)
// 대상 문자열을 대체 문자열로 치환
console.log("Replace")

console.log("world! - > Ches : ", str_2.replace("world!", "Ches"))    // Hello Ches
console.log("world! - > \"\" : ", str_2.replace(" world!", ""))       // Hello



// Match
// 문자데이터에서 정규표현식을 통해 특정한 문자를 일치시켜 배열데이터로 반환
console.log("Match")

const email = "chea0703@naver.com"

// 정규표현식
console.log(email.match(/.+(?=@)/))
console.log("ID = ", email.match(/.+(?=@)/)[0])



// Trim : 앞 뒤의 공백 문자를 제거한 문자열 반환
console.log("Trim")

const str_3 = "      Hello world!    "
console.log("str_3 = ", str_3)
console.log("str_3.trim() = ", str_3.trim())
