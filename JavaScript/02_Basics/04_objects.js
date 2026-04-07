
// singleton  objects
// const tinderUser = new Object()
const tinderUser={}

tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.inLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "cp",
            lastname:"Maurya"
        }
    }
}
// console.log(regularUser.fullname.userfullname);


const obj1 = {1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 ={obj1,obj2}
// const obj3 =Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}

console.log(obj3);

// value come from data base

const users = [
    {
        id:1,
        email:"cpmmaury@gamil.com"

    },
        {
        id:2,
        email:"cmpmmaury@gamil.com"

    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

 console.log(Object.entries(tinderUser));

  //objects destructure
 const course ={
    coursename : "js in hindi",
    price: "999",
    courseInstructor : "hitesh"
 }

//  course.courseInstructor

const{courseInstructor} =course

console.log(courseInstructor);



 
