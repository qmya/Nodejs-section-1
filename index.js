const fs = require("fs"); //fs Stands for file system, 👉🏽 will give access to reading and writing data ,👉🏽 A built-in function

const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); //synchrornous version of file reading

console.log(textIn);
