 const nums =300
 console.log(nums)

 const balance =new Number(100)
 console.log(balance);
 console.log(balance.toString().length);
 console.log(balance.toFixed(1));

 const othernumber = 123.8965
 console.log(othernumber.toPrecision(3)); 

 const hundreds =100000
 console.log(hundreds.toLocaleString('en-IN'));
    

//  ++++++++++++++  MATHS   +++++++++++++++

console.log(Math)  ; //Object [Math] {}

console.log(Math.abs(-4));   //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)) ; //5
console.log(Math.floor(4.9) ); //4
console.log(Math.min(4,8,9,6)); //4



 console.log(Math.random());  //give value b/w 0 and 1 
  console.log((Math.random()*10)+1); //if we need the value greater than 1 the only we can use this 
  console.log(Math.floor(Math.random()*10)+1);

  const min =10 // in some case min and max are define so we can use this

  const max=20

  console.log(Math.floor(Math.random() *(max -min +1))+ min);




