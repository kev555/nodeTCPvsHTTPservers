
const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    console.log("Request from: ", req.connection.remoteAddress, req.connection.remotePort);
    res.write("Your address and port is: " + req.connection.remoteAddress + req.connection.remotePort); // you can write a string or Buffer or Uint8Array ... need to write something
    res.end();
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});