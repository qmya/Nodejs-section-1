const fs = require("fs"); //fs Stands for file system, 👉🏽 will give access to reading and writing data ,👉🏽 A built-in function

const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); //synchrornous version of file reading

console.log(textIn);

//Writing data into the file

const textOut = `This is what awe know about the avacado: ${textIn}.\nCreated on ${Date.now()}`;

//Now writing the above textOut string to another file

fs.writeFileSync("./txt/output.txt", textOut);
console.log("File has been written");
