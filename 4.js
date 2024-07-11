// primitive 
let a =10;
let b = a;
 b = 20;        // changing b cant change a as only a copy is passed
 console.log(a)
 console.log(b)


//  reference type or non primitive
 let userOne = {
    name:"prince",
    age:17
 }

 let userTwo = userOne

 userTwo.age = 38       //it changes the value of userOne as they point to same memory address

 console.log(userOne.age)