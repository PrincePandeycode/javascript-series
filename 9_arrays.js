let arr= [1,2,3,4,5]

console.log(arr)

let arr2= new Array("prince ","pandey",1,2)
console.log(arr2)
console.log(arr2[1])


console.log(arr2.includes(2))
console.log(arr2.indexOf(2))
// it creates a shallow copy if you wat to copya araay

arr.push(33)
console.log("arr afetr push-",arr)

arr.pop()
console.log("arr after pop - ",arr)

arr.unshift(34)
console.log("arr after unshift  - ",arr)

arr.shift()
console.log("arr after shift  - ",arr)

console.log("slicing (1,3) rom arr", arr.slice(1,3)) //slice does not include 3

// splice removes thatpart

console.log("spicing array --", arr.splice(1,3))  // it icludes 3
console.log(" after spicing array --", arr)

let strr = arr2.join()
console.log(strr)
console.log( typeof strr)



