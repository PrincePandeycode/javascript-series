const mysym = Symbol("k1")

const user= {
    name : "Prince",
    age : 20,
    [mysym] : "mySymbol 1",  //using symbol
    location : "delhi",
    email : "ab@gmail.com", 
    isLogedn : true,
    "full Name" : "Prince pandey",
    LoginDay : ['mon','tue']
}

// // 1.accessing values
// console.log(user.email) //not so preffered
// console.log(user["email"])
// console.log(user["full Name"])
// console.log(user[mysym])

// // 2.Changing values
// user.age = 22
// console.log(user)

// 3.freeing oject
// Object.freeze(user)
// user.name = "Hiug" //no change
// console.log(user)

// // 4. addin funcn in obj
// user.greeting = function(){
//     console.log(`hello from ${this.name} of age : ${this.age}`)
// }

// user.greeting()


// // 5. Nested Objects
// const regUser = {
//     email:"abc@gmail.com",
//     fullName : {
//         userName:{
//             fname: "Prince",
//             Lname : "pandey"
//         }
//     }
// }
// console.log(regUser.fullName.userName.fname) //prince

// 6.merging objects

// const obj = {
//     1 : 'a',
//     2:'b'
// }

// const obj2 = {
//     3: 'c',
//     4: 'd'
// }

// const obj3 = {
//     5: 'e',
//     6:'f'
// }

// const obj4 = Object.assign({},obj,obj2,obj3) //assign method
// console.log(obj4)

// let obj4 = {...obj,...obj2,...obj3} // using sperad operator
// console.log(obj4)


// 7.Generating keys using object
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// 8. Object destruturing

// const course ={
//     coursename: "js",
//     price : 999,
//     InstructorName : "Pricne"
// }

// const {InstructorName} = course // now we dont have to wrte course.instuctorName we canus it directly
// const {InstructorName:Is1} = course // we can also reame it

// console.log(InstructorName)
// console.log(Is1)