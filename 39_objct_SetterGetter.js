const User = {
    _username : "Pince8",
    _password : "Prinsdgu",

    get username(){
        return this._username.toUpperCase()
    },
     set username(val){
        this._username = val
     },
    get password(){
        return this._password.toUpperCase()
    },
     set password(val){
        this._password = val
     }
}

const u1 =  Object.create(User)
console.log(u1.username)