// npm run dev // to run with nodemon
// dev is the script name defined in package.json
//console.log('Nodemon is running fast...');

import { add } from './math.js';

const result = add(5, 10);
console.log(`Addition: ${result}`);