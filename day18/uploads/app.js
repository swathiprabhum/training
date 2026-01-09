// Node JS

// Path
const path = require('path');
console.log(path.basename(__filename)); // current file name

// os 
const os = require('os');
console.log(os.platform()); 
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());

// fs - file system 
const fs = require('fs');
// fs.writeFileSync('example.txt', 'Hello Node.');
// console.log('File created successfully.');
// fs.appendFile("example.txt", "\nAppended text.", () => {});
// console.log('File updated successfully.');

fs.mkdirSync('uploads');
console.log('Directory created successfully.');

// npm init -y // to create package.json
// npm install nodemon --save-dev // to install nodemon as dev dependency
// npm install dotenv // to install dotenv package
 
