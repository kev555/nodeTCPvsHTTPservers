


const net = require('net');
const port = process.env.PORT || 3001;

const server = net.createServer(); // returns a net.Server


server.listen(port, '0.0.0.0', () => { // 0.0.0.0 option is just to specify ipv4 formatting only
    console.log('TCP Server is running on port ' + port + '.');
});

let sockets = [];

server.on('connection', function(sock) {
    
    sockets.push(sock);

    sock.on('data', function(data) {
        console.log(' Data from IP: ' + sock.remoteAddress + ' Port: ' + sock.remotePort + " said: " + data + '\n');
        sock.write("hello from server");
    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        let index = sockets.findIndex(function(o) {
            return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
        })
        if (index !== -1) sockets.splice(index, 1);
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
});


