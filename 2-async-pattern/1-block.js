const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    for (i = 0; i < 1000; i++) {
      for (j = 0; j < 2000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("Welcome to our about page");
  }
  if (req.url === "/contact") {
    res.end("welcome to our contact page");
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
