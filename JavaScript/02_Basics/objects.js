
// singleton   
// Objects.create

// objects literals
// use symbole as key
const mySym =Symbol("key1")    //declered  the symbole

const JsUser={
    name :"cpmaurya",
    "full name": "Cp maurya",
    [mySym]:  "mykey1",    //syntx for the use symbol as key
    age : 18,
    location :"Ballia",
    email:"cpmaurya@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["Monday","Saturday"]
     
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email ="chandumaurya@gmail.com" 
// Object.freeze(JsUser)
JsUser.email = "hsv@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
} 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


  