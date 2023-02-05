// Variable Scope
console.log("Variable Scope")

//  Block Level     : Const, Let
//  Function Level  : Var


// Const Scope : Block Level
function scope_a(){

    // console.log(a) -> ReferenceError

    if(true){                   // a's scope start

        // console.log(a) -> undefind
        const a = "A"
        console.log(a)  // -> A

    }                           // a's scope end

    // console.log(a) -> ReferenceError
}
console.log("scope_a")
scope_a()




// Let Scope : Block Level
function scope_b(){

    // console.log(b) -> ReferenceError

    if(true){                   // b's scope start

        // console.log(b) -> undefind
        let b = "B"
        console.log(b)  // -> B

    }                            // b's scope end

    // console.log(b) -> ReferenceError

}
console.log("scope_b")
scope_b()



// Var Scope : Function Level
function scope_c(){             // c's scope start

    // console.log(c) -> undefind

    if(true){   

        // console.log(c) -> undefind

        var c = "C"
        console.log(c)

    }           

    console.log(c) 

}                               // c's scope end

console.log("scope_c")
scope_c()





// Type Conversion
console.log("Type Conversion")

// Auto Type Conversion
console.log("Auto Type Conversion : (1 == \"1\") = ", 1 == "1")


// Truthy
// true, {}, [], 1, 2, "string", -1 ... etc

// Falsy
// false, "", null, undefined, 0, -0, NaN

console.log("ex) if({})")
if({}){
    console.log("{} is Truthy")
}

console.log("ex) if(!-0)")
if(!-0){
    console.log("-0 is Falsy")
}