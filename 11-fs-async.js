const { readFile, writeFile} = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  } else {
    const first = result;
    console.log(`data of first file: ${first}`);
    readFile("./content/second.txt", (err, result) => {
      if (err) {
        return;
      }else{
        const second = result;
        console.log(`data of second file: ${second}`);
        writeFile('./content/result-async.txt', `Check: ${first}, ${second}`,{flag: 'a'}, (err, result) => {
          if (err) {
            return;
          }else{
            console.log('done with this task');
          }
        });
      }
    });
  }
});
console.log("starting the next one");
