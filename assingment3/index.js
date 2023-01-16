// const fs = require("fs");
const http = require("http");

// fs.writeFile("index.html","Hello World",()=>{
   

// });
// fs.appendFile("index.html"," This is Maniph",()=>{

// });
const server = http.createServer((req,res)=>{
    res.end("./assingment/index.html");

});

server.listen(3000, "127.0.0.1", ()=>{
    console.log("hello");
});