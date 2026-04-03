
//                MEMORY IN JS

//  Stack (primitive)   , Heap (Non-Primitive)
let myyoutubename="cpmaurya"
let anothername =myyoutubename
anothername ="chaiaurcode"

console.log(myyoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi :"user@ybl"
}
let userTwo = userOne

userTwo.email ="cpmaurya@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);