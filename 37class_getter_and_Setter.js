class User{
    constructor(username,password){
        this._username = username
        this._password = password
    }

    set username(val){
        this._username= val
    }

    get username(){
        return this._username
    }

    set password(val){
        this._password = val
    }

    get password(){
        return this._password.toUpperCase()
    }
}

let u1 = new User("Princ122","Pinceyu")
console.log(u1.password)