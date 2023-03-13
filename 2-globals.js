// GLOBALS --No window !!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);
const intervalId = setInterval(()=>{
    console.log('set interval');
},1000);


// clear the interval after 5 seconds
setTimeout(()=>{
    clearInterval(intervalId);
    console.log('done');
},5000);

