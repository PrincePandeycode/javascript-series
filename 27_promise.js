const PromiseOne = new Promise(function(resolve,reject){
   
    setTimeout(function(){
        resolve()
        console.log("async task one is completed")
    },1000)
    
})

PromiseOne.then(function(){
    console.log("Promise one Resoved")
})

const pr2 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let error= false

        if(!error){
            resolve({name :"Prince",age :20})
        }
        else{
            reject("Something  two went wrong")
        }

    })
})

pr2.then((user)=>{
    return user.name
})

.then((name) =>{
    console.log(name)
})
.catch((err)=>{
    console.log(err)
})
.finally(() =>{
    console.log("Promise2 is either reslvd or rejected")
})


// async function cosumepr2(){
//    try{
//     let response = await pr2
//     console.log(response)
//    }
//    catch(err){
//     console.log(err)
//    }
// }

// cosumepr2()

fetch('https://api.github.com/users/PrincePandeycode').then((data) =>{
    return data.json()
})

.then((data2)=>{
    console.log(data2)
})
.catch((err)=>{
    console.log(err)
})