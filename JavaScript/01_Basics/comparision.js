
//   ***
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2">1);
console.log("02" >1);

console.log(null >0);
//  false ::: 
console.log(null ==0);
//  false::
console.log(null >=0);
//  true::

// the reason is that equality check == and comparisions > < >= <= works differently

// Comparision convert null to number , 
// treating it as 0.
// that why wht (3) null >=0 is true and (1) >0 is false


console.log(undefined==0);

console.log(undefined>0);
console.log(undefined<0);