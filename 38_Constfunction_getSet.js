function User(username,password)
{
    this._username = username
    this._password = password

    Object.defineProperty(this,"username",{
        set: function(val){
            this._username = val
        },
        get: function(){
            return this._username.toUpperCase()
        }
    })
    Object.defineProperty(this,"password",{
        set: function(val){
            this._password = val
        },
        get: function(){
            return this._password.toUpperCase()
        }
    })
}

const u2 = new User("Prince23","prianyb")
console.log(u2.password)

