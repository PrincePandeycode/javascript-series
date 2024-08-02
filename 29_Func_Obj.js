function multi5(num){
    return num*5;
}

multi5.someVal = 54 // we added some promperty to an function ke wedo to objects. prototypal inheitance

console.log(multi5(5))
console.log(multi5.someVal)
console.log(multi5.prototype) //return the context --> { } empty obj is here

// adding properties/methods to contructor function like wedo objecst

function createUser(name, score){
    this.name= name;
    this.score = score;
}

createUser.prototype.PrintMe = function(){
    console.log(`the price is ${this.score}`)
}

let u1 = new createUser("Tea",46)
let u2 = new createUser("chai",406)

u1.PrintMe()