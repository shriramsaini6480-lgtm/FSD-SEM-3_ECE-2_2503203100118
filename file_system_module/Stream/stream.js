import fs from "fs";
//readable stream
const readstream =fs.createReadStream("intro.txt", { encoding: "utf8", highWaterMark: 64 * 1024 });
//readstream.on("data", (chunk) => {
  //console.log("data is received");
  //console.log("data :", chunk);

//});
readstream.on("end", () => {
  console.log("data is end");
});
//writable stream
const writestream = fs.createWriteStream("output.txt");
//writestream.write("hello world\n");
readsream.on((error) => {
  console.log(error.message);
});
readstream.pipe(writestream);