const net = require('net');
const client = new net.Socket();
const port = 8000;
const host = 'localhost';

client.connect(port, host, function() {
    console.log('Connected');
    client.write("GET / HTTP/1.1\r\n\r\n"); //  socket.write("Hello From Client");
});

// this can communicate with a http server now, simply by sending that string !!!!
// Obviously this is not safe and could easily loose data from the returned buffer etc...

client.on('data', function(data) {
    console.log(Date.now());
    console.log('Server response as raw Buffer: \n ', data);
    console.log('Server response as string: \n ', data.toString());

    setTimeout(() => {
	    client.write("GET / HTTP/1.1\r\n\r\n"); //  socket.write("Hello From Client");
    }, 3000);

});

client.on('close', function() {
    console.log('Connection closed');
});

