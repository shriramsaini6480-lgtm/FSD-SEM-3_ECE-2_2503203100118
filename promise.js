const fetchUserData=new Promise((resolve, reject) => {
  let success=true;
  setTimeout(() => {
  if(success){
    resolve({ id: "101", username: "shriramsaini009" });
  } else {
    reject("Failed to fetch user data");
  }
 },1000);
});
fetchUserData.then((user)=>{
    console.log(user);
 })
    .catch((err=>{
        console.log(err);
   }))
