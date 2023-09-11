
// fetch api is now supported in Node, here a fetch implementation:
// url = 'http://localhost';
// fetch(url)
//   .then((response) => response.text())
//   .then((data) => {
//     console.log(data);
//   });



var http_interface = require('http');
// var http_interface = require('https'); // CHANGE to https when using render.io

// import http_interface from 'http'; // (---> from 2019 in Node, to use modules, the nearest parent package.json file must contain "type": "module")

const options = {
    //hostname: 'nodetcpvshttpservers.onrender.com',
    hostname: '0.0.0.0',
    
    port: 3001, // interestingly dont even need to specify 443 when using https
    // path: '/',
    // method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    //   //'Content-Length': Buffer.byteLength(postData),
    // },
};

var req = http_interface.request(options) // returns a http.ClientRequest object https://nodejs.org/api/http.html#httprequesturl-options-callback

req.on('response', res1 => {

    let data = [];
    
    res1.on('socket', chunk => {
        console.log(7777)
    });
    
    res1.on('data', chunk => {
        console.log(chunk)
        data.push(chunk);
    });
    
    res1.on('end', () => {
        console.log("endddddd")
        console.log(data.toString())
    });
});

req.on('error', err => {
    console.log('Error: ', err.message);
});

req.on('socket', chunk => {
    console.log('socket returned')
});

req.end(); 

// "With http.request() one must always call req.end() to signify the end of the request - even if there is no data being written to the request body."

// In a successful request, the following events will be emitted in the following order:
// 'socket'
// 'response'
// 'data' any number of times, on the res object ('data' will not be emitted at all if the response body is empty, for instance, in most redirects)
// 'end' on the res object
// 'close'

