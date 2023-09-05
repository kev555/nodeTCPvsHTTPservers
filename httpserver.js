
const http = require("http");
const host = '0.0.0.0';
const port = process.env.PORT || 3001;

const requestListener = function (req, res) {
    
    res.writeHead(200);
    console.log("Request from: ", req.connection.remoteAddress, req.connection.remotePort, req.socket.remoteAddress, req.headers['x-forwarded-for']);
    res.write("Your address and port is: " + req.connection.remoteAddress + req.connection.remotePort); // you can write a string or Buffer or Uint8Array ... need to write something
    res.end();
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {

    console.log("why is this not logging 111111111!!!!");
    console.log(`Server is running on http://${host}:${port}`);
});