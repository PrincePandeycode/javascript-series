class UserD{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`${this.username} is username`)
    }
}

class teacher extends UserD{
    constructor(username,age,subject){
        super(username)
        this.age = age
        this.subject = subject

    }

    printTea(){
        console.log(`${this.subject} is taught by ${this.username}`)
    }
}

let t1 = new teacher("Prince",21,"maths")
t1.logMe()
t1.printTea()