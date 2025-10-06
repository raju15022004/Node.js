console.log("Kg Coding is the best,");

const fs=require('fs');
fs.writeFile("output.txt","writing File",(err)=>{
  if(err) console.log("Error occured");
  else console.log("file written Successfully");
})
