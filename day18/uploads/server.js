
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Hello from the server!');
//     res.end();
// });

// // To start the server
// server.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });

const http = require('http');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (req.url === '/') {
        res.end(JSON.stringify({ message: 'Welcome to the Home Page' }));
    } else if (req.url === '/about') {
        res.end(JSON.stringify({ message: 'This is the About Page' }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Page Not Found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});