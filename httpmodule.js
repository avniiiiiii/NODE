const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hey! Welcome to the homepage");
  } else if (req.url === "/about") {
    res.end("Hey! Welcome to the about section");
  } else {
    res.end(`
          <h1>Oops!</h1>
          <p>We can't find what you're looking for.</p>
        `);
  }
});

server.listen(5000);
