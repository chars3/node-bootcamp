const fs = require("fs");
const http = require("http");
const url = require("url");

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("will read this!");

//SERVER
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("this is the overview");
  } else if (pathName === "/product") {
    res.end("this is the product");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      console.log(productData);
    });

    res.end("API");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>page not found</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("running on port 3000");
});
