// using smeother function by passing our context to itusing call()

function SetUsername(username){
    this.username = username
    
}

function SetUser(username,email,password){
    SetUsername.call(this,username) //this is our context and username our argument
    this.email = email
    this.password = password
}

let p1 = new SetUser("prince","prince@google.com","123")

console.log(p1)

// 2. ----------------------------

const FullName = {
    printit : function(){
        return this.firstname +" "+ this.lastname
    }
}

const person = {
    firstname:"Prince",
    lastname:"Pandey"
}

console.log(FullName.printit.call(person))

// 3.the primary difference between apply and call in JavaScript lies in how arguments are passed to the function:

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];

// Using apply
console.log(sum.apply(null, numbers)); // Output: 6

// Using call
console.log(sum.call(null, 1, 2, 3)); // Output: 6



