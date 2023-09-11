
const http = require("http");
const host = '0.0.0.0';
const port = process.env.PORT || 3001;

const requestListener = function (req, res) {
    
    console.log("\nreq.connection.remoteAddress: ", req.connection.remoteAddress, "\nreq.connection.remotePort: ", req.connection.remotePort, "\nreq.socket.remoteAddress: ", 
    "\nreq.socket.remoteAddress: ", req.socket.remoteAddress, "req.headers['x-forwarded-for']: ", req.headers['x-forwarded-for']);

    // from https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
    // X-Forwarded-For: <client>, <proxy1>, <proxy2>

    res.writeHead(200);
    
    // You can write only a String or Buffer or Uint8Array ... you need to write something or no response will be sent.
    res.write("\nreq.connection.remoteAddress: " + req.connection.remoteAddress+ "\nreq.connection.remotePort: " + req.connection.remotePort+ "\nreq.socket.remoteAddress: "+ 
    "\nreq.socket.remoteAddress: "+ req.socket.remoteAddress+ "\nreq.headers['x-forwarded-for']: "+ req.headers['x-forwarded-for']); 
    
    res.end();
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});