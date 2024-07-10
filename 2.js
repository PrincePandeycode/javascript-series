"use strict";
// alert(3+3)

let a = 43
let b = -33
let c ="Prince pandey"
let d = true
let e = null   // type isobject
let f;
let g = 123n;

console.table([a,b,c,d,e,f,g])
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof Symbol());     // Output: "symbol"
console.log(typeof 123n);         // Output: "bigint"
console.log(typeof {});           // Output: "object"
console.log(typeof []);           // Output: "object"
console.log(typeof function(){}); // Output: "function"

