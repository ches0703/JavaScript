import random from "./getRandom"

// IF Statement
console.log("IF Statement")
const a = random()

if(a == 0){
    console.log("a = 0")
}
else if(a == 5){
    console.log("a = 5")
}
else if(a == 8){
    console.log("a = 5")
}
else{
    console.log("rest...")
}


// Switch Statement
console.log("Switch Statement")

switch(a){
    case 0:
        console.log("a = 0")
        break
    case 5:
        console.log("a = 5")
        break
    case 8:
        console.log("a = 5")
        break
    default:
        console.log("rest...")
}


