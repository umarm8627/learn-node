const { readFile, createReadStream } = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // ??load all data at once
  // readFile('./content/big.txt', (err, result) => {
  //     if (err) {
  //         console.log(err);
  //         return;
  //     }
  //     res.end(result);
  // });
  // //?? load data in chunks/ streamly
  // const rstream = createReadStream('./content/big.txt', 'utf8');
  // rstream.on('data', (chunkData) => {
  //     res.write(chunkData);
  // });
  // rstream.on('end',()=>{
  //     res.end();
  // });
  // rstream.on('error',(err)=>{
  //     console.log(err);
  //     res.end('File not found')
  // })
  // ?? pipe
  const rstream = createReadStream("./content/big.txt", "utf8");
  rstream.pipe(res);
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

/*

Each type of stream is an event emitter.
So we can listen to events on the stream.
??data - when data is available to read
??end - when there is no more data to read
??error - when there is an error reading the data
??finish - when all the data has been flushed to underlying system

*/
