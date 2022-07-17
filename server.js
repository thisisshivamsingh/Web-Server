// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/plain" });
//   res.end("Hello dude, i am a response");
// });

// server.listen(8181, "127.0.0.1");
// console.log("Server is listening on port 8181");

////////////////// SENDING A RESPONSE ////////////////

// const http = require("http");
// const fs = require("fs");

// // let HTML = fs.readFileSync(`${__dirname}/index.html`);
// const names = ["francis", "james", "Rob"];
// const cars = {
//   name: "Ford",
//   model: "Fiesta",
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   const json = JSON.stringify({
//     names,
//     cars,
//   });
//   res.end(json);
// });

// server.listen(8181, "127.0.0.1");
// console.log("Server is listening on port 8181");

////////////////// CREATING ROUTES /////////////////

const http = require("http");
const fs = require("fs");

const names = ["francis", "james", "Rob"];
const cars = {
  name: "Ford",
  model: "Fiesta",
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let HTML = fs.readFileSync(`${__dirname}/index.html`);
    res.end(HTML);
  } else if (req.url === "/api/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const json = JSON.stringify({
      names,
      cars,
    });
    res.end(json);
  } else {
    res.writeHead(400);
    res.end();
  }
});

server.listen(8181, "127.0.0.1");
console.log("Server is listening on port 8181");
