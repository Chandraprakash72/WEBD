
//   date

let myDate =new Date()
console.log(myDate.toString());  //Sat Apr 04 2026 17:50:15 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  //Sat Apr 04 2026
console.log(myDate.toLocaleString());//  4/4/2026, 5:50:15 pm
console.log(typeof myDate);      //object    



// if you want to define specific date 
let myCreatedDate = new Date(2023,0,23)   //month started from 0  in java Script
console.log(myCreatedDate.toDateString())
 
//if you  want to define specific date as well as time
let myCreatedDatee = new Date(2023,0,23,5,3) 
console.log(myCreatedDatee.toLocaleString());


// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

//seccond
console.log(Math.floor(Date.now(Date.now()/1000)));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    
})
