// // lexical scoping
function outer1(){
    let name = "in enclosing func scope"
    function display(){
        console.log(name)
    }

    display()
}

outer1()

// ----------------------------
// closure

function outer(){
    let name = "prince"
    function display(){
        console.log(name)
    }

    return display
}

let a = outer()
a()