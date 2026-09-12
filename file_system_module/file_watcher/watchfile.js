import fs from "fs";
//fs.watchFile("notes.txt",(pre,curr)=>{
    //console.log("previous",pre);
    //console.log("current",curr);
    //if(pre!==curr){
      //  console.log("file has been modified");
    //}

//})
const fs = require("fs");
const watcher = fs.watch("notes.txt",(eventType,filename)=>{
    console.log("event type is:" , eventType);
    console.log("filename " , filename);
})
setTimeout(()=>{
    watcher.close();
    console.log("file watching closed")
},5000)    