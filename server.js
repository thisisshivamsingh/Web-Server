///////////////// CREATING A NODE WEB SERVER ///////////////

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

// const http = require("http");
// const fs = require("fs");

// const names = ["francis", "james", "Rob"];
// const cars = {
//   name: "Ford",
//   model: "Fiesta",
// };

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     let HTML = fs.readFileSync(`${__dirname}/index.html`);
//     res.end(HTML);
//   } else if (req.url === "/api/user") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     const json = JSON.stringify({
//       names,
//       cars,
//     });
//     res.end(json);
//   } else {
//     res.writeHead(400);
//     res.end();
//   }
// });

// server.listen(8181, "127.0.0.1");
// console.log("Server is listening on port 8181");

///////////////// CREATING A SERVER WITH EXPRESS ///////////////

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send(
//     `<html>
//       <body>
//         <h1>Hello !!</h1>
//       </body>
//     </html>`
//   );
// });

// app.get("/api/user", (req, res) => {
//   res.send({
//     name: "Francis",
//     lastname: "Jones",
//   });
// });
// const PORT = process.env.PORT || 3000;
// app.listen(PORT);

///////////////// QUERY STRINGS AND PARAMS ///////////////

// const express = require("express");
// const app = express();

// app.get("/api/:user/:id", (req, res) => {
//   let id = req.params.id;
//   let user = req.params.user;
//   res.send(
//     `<html>
//       <body>
//         <h1>The User name is ${user} and the id is ${id}</h1>
//       </body>
//     </html>`
//   );
// });

// /// hhh.com/car?brand=ford&year=2022
// app.get("/api/car", (req, res) => {
//   let brand = req.query.brand;
//   let year = req.query.year;
//   res.send({ brand, year });
// });
// const PORT = process.env.PORT || 3000;
// app.listen(PORT);

/////////////////// MIDDLEWARE 1 //////////////////

// const express = require("express");
// const app = express();

// app.use("/css", express.static(__dirname + "/public/css"));

// app.get("/", (req, res) => {
//   res.send(
//     `<html>
//       <head>
//         <link type="text/css" rel="stylesheet" href="/css/styles.css">
//       </head>
//       <body>
//         <h1>
//           Hello !!
//         </h1>
//       </body>
//     </html>`
//   );
// });

// app.get("/api/:user/:id", (req, res) => {
//   let id = req.params.id;
//   let user = req.params.user;
//   res.send(
//     `<html>
//       <body>
//         <h1>The User name is ${user} and the id is ${id}</h1>
//       </body>
//     </html>`
//   );
// });

// /// hhh.com/car?brand=ford&year=2022
// app.get("/api/car", (req, res) => {
//   let brand = req.query.brand;
//   let year = req.query.year;
//   res.send({ brand, year });
// });
// const PORT = process.env.PORT || 3000;
// app.listen(PORT);

/////////////////// MIDDLEWARE 2 //////////////////

// const express = require("express");
// const app = express();

// app.use("/css", express.static(__dirname + "/public/css"));
// app.use("/", (req, res, next) => {
//   console.log("someone made a request for:" + req.url);
//   res.cookie("cookieName", "cookieValue");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send(
//     `<html>
//       <head>
//         <link type="text/css" rel="stylesheet" href="/css/styles.css">
//       </head>
//       <body>
//         <h1>
//           Hello !!
//         </h1>
//       </body>
//     </html>`
//   );
// });

// app.get("/api/:user/:id", (req, res) => {
//   let id = req.params.id;
//   let user = req.params.user;
//   res.send(
//     `<html>
//       <body>
//         <h1>The User name is ${user} and the id is ${id}</h1>
//       </body>
//     </html>`
//   );
// });

// /// hhh.com/car?brand=ford&year=2022
// app.get("/api/car", (req, res) => {
//   let brand = req.query.brand;
//   let year = req.query.year;
//   res.send({ brand, year });
// });
// const PORT = process.env.PORT || 3000;
// app.listen(PORT);

/////////////////// POSTING ///////////////////

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/", (req, res, next) => {
  console.log("someone made a request for:" + req.url);
  res.cookie("cookieName", "cookieValue");
  next();
});

app.get("/", (req, res) => {
  res.send(
    `<html>
      <head>
        <link type="text/css" rel="stylesheet" href="/css/styles.css">
      </head>
      <body>
        <h1>
          Hello !!
        </h1>
      </body>
    </html>`
  );
});

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get(`/user`, (req, res) => {
  let HTML = fs.readFileSync(`${__dirname}/views/user.html`);
  res.send(`${HTML}`);
});

app.post("/api/adduser", jsonParser, (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.get(`/querystring`, (req, res) => {
  let HTML = fs.readFileSync(`${__dirname}/views/querystring.html`);
  res.send(`${HTML}`);
});

app.post("/api/queryadd", urlencodedParser, (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  console.log(firstname + " " + lastname);

  res.sendStatus(200);
});

app.get("/api/:user/:id", (req, res) => {
  let id = req.params.id;
  let user = req.params.user;
  res.send(
    `<html>
      <body>
        <h1>The User name is ${user} and the id is ${id}</h1>
      </body>
    </html>`
  );
});

/// hhh.com/car?brand=ford&year=2022
app.get("/api/car", (req, res) => {
  let brand = req.query.brand;
  let year = req.query.year;
  res.send({ brand, year });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT);
