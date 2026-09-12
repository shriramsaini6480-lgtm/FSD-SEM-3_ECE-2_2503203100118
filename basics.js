console.log("hello everyone");
//asynchronous programming
console.log("Start async programming");
setTimeout(()=>{
console.log("hello world");
},4000);
//
//callstack
//node API
//micro tasks
//macro tasks

//execution order


setTimeout(()=>{
    console.log("MacroTask Queue")
},0);




// const fs = require("fs");
// function areaofCircle(radius){
//     return 3.14*pow(radius,2);
// }

const {greet,circumference} = require(`./common`);
greet();
circumference(10);

import {areaOfCircle} from "./common.js";
areaOfCircle(10);


const promise1 = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve({
            id:220007,
            name:"Shubham Singh"
        })
    }
    } else {
        reject({
            message:"user not found"
        })
    }
    }
});

promise1.then((response)=>{
    console.log("user fetched data successfully",response);
});

promise1.then((respose)=>{
    console.log("user fetched data successfully",response)
}).catch((error)=>{
    console.log("user fetched data failed",error)
})