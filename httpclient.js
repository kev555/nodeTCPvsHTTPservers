
// fetch api is now supported in Node, here a fetch implementation:
// url = 'http://localhost';
// fetch(url)
//   .then((response) => response.text())
//   .then((data) => {
//     console.log(data);
//   });


const options = {
    hostname: 'nodetcpvshttpservers.onrender.com',
    port: 10000,
    // path: '/',
    // method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    //   //'Content-Length': Buffer.byteLength(postData),
    // },
};


// import http_interface from 'http'; // (---> from 2019 in Node, to use modules, the nearest parent package.json file must contain "type": "module")
var http_interface = require('http');
var req = http_interface.request(options) 

// http.request returns a http.ClientRequest object https://nodejs.org/api/http.html#httprequesturl-options-callback


req.on('socket', huh => {
    //console.log(huh);
});

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
        console.log(data.toString())
    });
});

req.on('error', err => {
    console.log('Error: ', err.message);
});

req.on('socket', chunk => {
    console.log(9999)
});

req.end(); 

// "With http.request() one must always call req.end() to signify the end of the request - even if there is no data being written to the request body."

// In a successful request, the following events will be emitted in the following order:
// 'socket'
// 'response'
// 'data' any number of times, on the res object ('data' will not be emitted at all if the response body is empty, for instance, in most redirects)
// 'end' on the res object
// 'close'


