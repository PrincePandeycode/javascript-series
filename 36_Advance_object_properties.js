//1.  we cant chage th vale of pi
console.log(Math.PI)

const a= Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(a) // value: 3.141592653589793,
                    // writable: false,
                    // enumerable: false,       
                    // configurable: false     

// 2. Changing Property of our own Objects

const chai = {
    Cname :"Green Tea",
    Price:344,
    IsAvailable: true
}

chai.Price = 250  // can b changed
console.log(chai)

// 1- making it not writable
Object.defineProperty(chai,"Price",{
    writable:false
})

chai.Price = 2300  // can't be changed
console.log(chai)

// 2- make it not iterable (one value)

Object.defineProperty(chai,"Price",{
    enumerable:false
})

console.log(chai)  // Price is not availale now


