// Adding a method to all the objects like str,arr,function,object 

let myarr = ["Price","sales"]
let mystr = 'Prince Pandey'

let myobj = {
    name:"Prince Pandey",
    age:20,
    work:function(){
        console.log("Software dev")
    }
}

Object.prototype.prince = function(){
    console.log("this is prsent everywhere", this.constructor)
}

myarr.prince()
mystr.prince()
myobj.prince()

// Adding a functionality to all the strings

String.prototype.truelen = function(){
    console.log(`the true len is ${this.trim().length}`)
}

let namee = "prince    "
console.log(namee.length)
namee.truelen()


// Inheritance

let student = {
    Name: "Prince",
}

let Teacher= {
    makeVideo:true
}


let assistant = {
    makeAssgnments:"js ",
    __proto__:Teacher
}


let qaAsst = {
    SolveProblem:true
}
qaAsst.__proto__ = assistant  //Old way

Object.setPrototypeOf(Teacher,student)

console.log(Teacher.Name)
