

const net = require('net');
const client = new net.Socket();  // creates a net.Socket
const client1a = new net.Socket();
const port = 3001;
const host = 'localhost';

client.connect(port, host, function() {
    console.log('Connected');
    client.write("Hello From Client 1");
});
client.on('data', function(data) {
    console.log('Server Says : ' + data);
    setTimeout(() => {
	    client.write("Hello From Client 1");
    }, 3000);

});
client.on('close', function() {
    console.log('Connection closed');
});


client1a.connect(port, host, function() {
    console.log('Connected');
    client1a.write("Hello From client1a");
});
client1a.on('data', function(data) {
    console.log('Server Says : ' + data);
    setTimeout(() => {
	    client1a.write("Hello From client1a");
    }, 3000);

});
client1a.on('close', function() {
    console.log('Connection closed');
});

