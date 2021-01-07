const fs = require("fs"); //fs Stands for file system, 👉🏽 will give access to reading and writing data ,👉🏽 A built-in function
const http = require("http");
const url = require("url");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Files
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

// fs.readFile("./txt/start.txt", "utf-8", (error, data1) => {
//   if (error) return console.log("ERROR 🧨");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (error, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (error, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written 😀");
//       });
//     });
//   });
// });
// console.log("Will read file!");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Server
//1- Create the server
const server = http.createServer((request, response) => {
  console.log(request.url);
  const pathName = request.url;
  // '/' is the root
  //Routing
  if (pathName === "/" || pathName === "/overview") {
    response.end("This is the overview");
  } else if (pathName === "/product") {
    response.end("This is the product");
  } else {
    //Sometime when page is not found we see 404 error
    //We can also that too here
    response.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    response.end("<h1>Page not found!</h1>");
  }
  response.end("Hello from the server");
});
//2- Listen to the incoming requests from the client
//first is the port and second is the local host and 3rd is a call back
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the requests on port 8000");
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
