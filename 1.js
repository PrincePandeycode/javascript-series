console.log("hello there")
const accountId= 234
var accName= "prince"
let accmail = "abc@mail.com"
price = 45;

// accountId = 45   --> throws : TypeError: Assignment to constant variable.
// console.log(accountId)

accName = true          // we can change the datatpe while reassigning valus here
accmail = 78
price = 99

console.table([accName,accmail,price])