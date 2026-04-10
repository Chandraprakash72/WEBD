


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
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2,...num1){ //()...)rest operator used to return all value in array 
    return num1
}
console.log(calculateCartPrice(200,400,500,2000,5004))  

// how to pass object to funcrion

const user ={
    user: "hitesh",
    price: 199

}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)

 //another way to pass object to functions
 handleObject({
    username: "cpmaurya",
    price : 399
 })

//   arrray pass to functions

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));