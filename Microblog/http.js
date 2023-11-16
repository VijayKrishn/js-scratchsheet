const http = require('http');

const server = http.createServer((req, res) => {
    console.log('server is now running');

    res.writeHead(200, {'content-type': 'text/html'})
    res.end('<h1> hi vijay </h1>')
});

server.listen(3000);