const path = require('path');
const filePath = path.join('content/','sub-content','nested-content','test.txt');
const base = path.basename(filePath);
console.log(base);

// absolute path
const absolute = path.resolve(__dirname,'content','sub-content','nested-content','test.txt');
console.log(absolute);

const folder = path.dirname(absolute);
console.log(folder);

const extension = path.extname(absolute);
console.log(extension);