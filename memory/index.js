//Buffer

let buffer = Buffer.from([1, 2, 7]);

let alphabet = Buffer.alloc(26);

for (let index = 0; index < 26; index++) {
  alphabet[index] = index + 97;
}

// console.log(alphabet.toString());

const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");

readableStream.setEncoding("utf-8");
readableStream.on("data", (chunk) => {
  data += chunk;
});

readableStream.on("end", () => {
  //	console.log(data);
  //	console.log('Reading ended');
});

// process.stdout.write('Hi, How are you');

const Transform = stream.Transform;

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
