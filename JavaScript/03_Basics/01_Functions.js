


function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){
    let result = number1 + number2
    return result
}
const result =addTwoNumber(3,8)

// console.log("Result :",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())