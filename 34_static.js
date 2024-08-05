class Animal{
    constructor(Aname){
        this.Aname = Aname
    }

    walk(){
        console.log(` ${this.Aname} is walking`)
    }

    static captalize(Aname){
        return Aname.charAt(0).toUpperCase() + Aname.substr(1)
    }
}

let lion= new Animal(Animal.captalize("lion"))
lion.walk()