const fs = require("fs"); //fs Stands for file system, 👉🏽 will give access to reading and writing data ,👉🏽 A built-in function

//Block synchrounous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); //synchrornous version of file reading

// console.log(textIn);

//Writing data into the file

// const textOut = `This is what awe know about the avacado: ${textIn}.\nCreated on ${Date.now()}`;

// //Now writing the above textOut string to another file

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File has been written");

//Non Block Asynchrounous way
//readFile without sync
//Callback hell or promiises

fs.readFile("./txt/start.txt", "utf-8", (error, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (error, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (error, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Your file has been written 😀");
      });
    });
  });
});
console.log("Will read file!");
