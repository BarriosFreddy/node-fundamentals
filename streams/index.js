const fs = require("fs");
const stream = require("stream");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");
let writableStream = fs.createWriteStream(__dirname + "/input1.txt");

/* readableStream.setEncoding("utf-8");
readableStream.on("data", (chunk) => {
  data += chunk;
  writableStream.write(data);
});
readableStream.on("end", () => {
  console.log("Reading ended");
  writableStream.end();
}); */

//By using pipes
//readableStream.pipe(writableStream);

// process.stdout.write('Hi, How are you');

const Duplex = stream.Duplex;
class RepalcerTtoD extends Duplex {
  constructor() {
    super();
  }
  _read() {
    console.log("Reading file...");
  }
  //
  _write(chunk, codif, callback) {
    let chunkAsString = chunk.toString();
    this.push(chunkAsString.replaceAll(/t/gi, "d"));
    callback();
  }
}
const repalcerTtoD = new RepalcerTtoD();
readableStream.pipe(repalcerTtoD).pipe(writableStream);

/* const Transform = stream.Transform;
class Mayus extends Transform {
  constructor() {
    super();
  }
  // Transform the file content to Upper Case
  _transform(chunk, codif, callback) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
  }
}

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
 */
