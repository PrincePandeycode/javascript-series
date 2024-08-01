function User(name,age,id){
    this.age = age;
    this.name = name;
    this.id = id;
    // return this; // implicitly written
}

const u1 = new User("Prince",21,111) 
const u2 = new User("pandey",22,211)

//witout the new keyword u2 wll overwrite the u1

console.log(u1)
console.log(u2)

console.log(u1.constructor)  // tell what is u1 a function aur class

console.log(u1 instanceof User)  //returns true