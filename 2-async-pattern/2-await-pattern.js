const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    await writeFilePromise("./content/first.txt", "This is first file");
    await writeFilePromise("./content/second.txt", "This is second file");
    const first = await readFilePromise("./content/first.txt","utf-8");
    const second = await readFilePromise("./content/second.txt","utf-8");
   console.log(first, second);
  } catch (e) {
    console.log(e);
  }
};
start();

/*
?? The util module in Node.js is a built-in module 
??that provides several utility functions that are 
??commonly used in JavaScript programming.
?? This module contains various functions that are useful for working with objects, strings, and other types of data.

??util.promisify: This function is used to convert callback-based APIs into Promise-based APIs.

*/

/*
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      else{
        resolve(data);
      }
    });
  });
};

*/
