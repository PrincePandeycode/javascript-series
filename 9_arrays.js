// let arr= [1,2,3,4,5]

// console.log(arr)

// let arr2= new Array("prince ","pandey",1,2)
// console.log(arr2)
// console.log(arr2[1])


// console.log(arr2.includes(2))
// console.log(arr2.indexOf(2))
// // it creates a shallow copy if you wat to copya araay

// arr.push(33)
// console.log("arr afetr push-",arr)

// arr.pop()
// console.log("arr after pop - ",arr)

// arr.unshift(34)
// console.log("arr after unshift  - ",arr)

// arr.shift()
// console.log("arr after shift  - ",arr)

// console.log("slicing (1,3) rom arr", arr.slice(1,3)) //slice does not include 3

// // splice removes thatpart

// console.log("spicing array --", arr.splice(1,3))  // it icludes 3
// console.log(" after spicing array --", arr)

// let strr = arr2.join()
// console.log(strr)
// console.log( typeof strr)

const marvel = ["Ironman","spiderman",'thor']

const dc= ["SuperMan", "BatMan","Flash"]

// console.log(marvel.push(dc)) // prints 4
// console.log(marvel) //arvel now [ 'Ironman', 'spiderman', 'thor', [ 'SuperMan', 'BatMan', 'Flash' ] ]
// console.log(marvel[3][2])  //flash

// cocatenation
// 1.
// const allHero = marvel.concat(dc)
// console.log(allHero)
// 2.
// const allHero= [...dc,...marvel]
// console.log(allHero)


// flattenin an array
// const arr = [1,2,[3,4,[5,6],7],8]
// console.log(arr.flat(Infinity))


// checking if it is a array
// console.log(Array.isArray("prince")) //false
// console.log(Array.isArray(dc)) //true

// convertign to aray
// const a  =Array.from("prince")
// console.log(a)  //[ 'p', 'r', 'i', 'n', 'c', 'e' ]

// const a = Array.from({name:"Prince"})
// console.log(a) //empty array []


// Array from variabls
// let a =6
// let b= 7
// let c= 8
// const ar2=Array.of(a,b,c)
// console.log(ar2)
