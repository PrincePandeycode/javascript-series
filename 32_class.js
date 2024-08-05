class User{
    constructor(username,age){
        this.username = username
        this.age = age

    }

    printAGe(){
        console.log(`${this.username} is ${this.age} year old`)
    }
}

let u1 = new User("prince",21)
u1.printAGe()


// Behind the Scenes

function userF(uname,age){
    this.uname = uname
    this.age = age
}

userF.prototype.printAll = function()
{
    console.log(`${this.uname} is ${this.age} year old`)

}

let u4 = new userF("prince",21)
u4.printAll()

