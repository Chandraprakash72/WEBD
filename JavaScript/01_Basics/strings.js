
const name ="cpmaurya"
const repocount=5

// console.log(name + repocount +" Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('cpmauryaa-hsv-kushwaha')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =gameName.slice(-2,4)
console.log(anotherString);

const newStringOne ="   cpmsurys@gmail     "

console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://cpmaurya.com/cpmaurya%20kushwaha"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));
console.log(gameName.split('-'));