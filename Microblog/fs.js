// FILE System Module, call as async function
const http = require('http');
const url = require('url');
const fs = require('fs').promises;
const validator = require('validator');

console.log(validator.isEmail('vijay@gmail.com'));

const server = http.createServer(async (req, res) => {
    console.log('server is now running');
    if(req.url === '/favicon.ico')
    return;
    const myURL = new URL(req.url,'http://localhost:3000/');
    console.log(myURL);
    const data = await fs.readFile('./new.html', 'utf-8');
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(data);
});

server.listen(3000);
// // create a file
// fs.writeFile('./app.txt', 'hi easy learning', (err) => {
//     if(err) console.log(err);
//     else console.log('File created');
// });

// fs.readFile('./app.txt', 'utf-8', (err, data) => {
//     if(err) console.log(err);
//     else console.log(data);
// });

// fs.rename('./app.txt' , './helper.txt', (err) => {
//     if(err) console.log(err);
//     else console.log('File Successfully Renamed');
// });

// fs.unlink('./helper.txt', (err) => {
//     if(err) console.log(err);
//     else console.log('File unlinked successfully');
// })

// async function getSum() {
//     let data = await fs.readFile('./data.json', 'utf-8');
//     data = JSON.parse(data);
//     let sum = 0;
//     for(let user of data) {
//         sum += user.salary;
//     }
//     console.log(sum);
// }

// getSum();