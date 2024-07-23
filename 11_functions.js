// // 1.function 

// function say()
// {
//     console.log("Hello")
// }

// say()//fuction calling


// // 2.
// function addNum( num1, num2){
//     return num1+num2
// }

// let a = addNum(5,4)
// console.log(a)



// // 3. ... params
// function Calculatecart(...num1){
//     return num1
// }

// let a3 = Calculatecart(10,20,20,30,4034,33)
// console.log(a3)


// // 4. passing obejct to fuction
// const user = {
//     name : "Prince",
//     age:20
// }

// function printame(user){
//     console.log(`username is ${user.name}`)
// }

// printame(user)


// // 5.passig array to function
// let arr = [10,20,30,40]

// function myfunc(arr){
//     console.log(arr[2])
// }

// myfunc(arr)


// // 6. mini hoistig
// console.log(addOne(8))  //prints 9
// function addOne(num){
//     return num+1
// }
// console.log(addOne(6)) //prints 7

// // it wont work if we assign funcn to a variavle
// console.log(addtwo(5))  //ReferenceError: Cannot access 'addtwo' before initialization
// let addtwo = function(num){
//     return num+2
// }
// console.log(addtwo(3))


// ----------------------------------------------------------------------------------//
// this in Functions

// // 1.
// // console.log(this) // returns empty object here ,but will return window obj in browser cosole

// // 2.
// function chkthis(){
//     console.log(this)  // <ref *1> Object [global] we get so much things
// }

// chkthis()

// // 3. 
// function chekThis(){
//     let name = 'Prince'
//     console.log(`${this.name}`) // - undefined
// }
// // chekThis()

// ----------------------------------------------------------------------------------//
// Arrow funtions

// 1.
// const chekthis = () =>{
//     console.log(this) //return empty obj
// }

// chekthis()

// 2 explicit return
// const addtwo= (n1,n2)=>{
//     return n1+n2
// }

// let a = addtwo(5,7)
// console.log(a)

// 3.Implicit return 
// const addtwo = (n1,n2) => (n1+n2)  // parenthsis is imp , helps in retrnning an object
// let a = addtwo(5,7)
// console.log(a)

// ----------------------------------------------------------------------------------//
// IIFE - Immediatly invoked function Expression , immeditly starts, have it own scope syntx -()();

// (function db(){
//     console.log("DB cnnected")
// })();

((name) =>{
    console.log(`DB CONNECTED ${name}`)
})("students");