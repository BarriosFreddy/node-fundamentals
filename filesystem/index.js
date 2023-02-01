const fs = require("fs");
const fsp = require("fs/promises");

/* fs.readFile(__dirname + "/input.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) console.error(e);
  console.log(data);
}); */

const newData = "This is a new line\n";
/* fs.writeFile(
  __dirname + "/input.txt",
  newData,
  { encoding: "utf-8" },
  (err) => {
    if (err) console.error(e);
    console.log("Data saved successfully");
  }
); */

/* fs.appendFile(
  __dirname + "/input.txt",
  newData,
  { encoding: "utf-8" },
  (err) => {
    if (err) console.error(e);
    console.log("Data saved successfully");
  }
); */

fs.stat(__dirname + "/input.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) console.error(e);
  console.log(data);
});

/* (async () => {
  try {
    const data = await fsp.readFile(__dirname + "/input.txt", {
      encoding: "utf-8",
    });
    console.log(data);
  } catch (er) {
    console.error(er);
  }
})(); */

/* (async () => {
  try {
    await fsp.writeFile(__dirname + "/input.txt", newData, {
      encoding: "utf-8",
    });
    console.log("Data saved successfully");
  } catch (er) {
    console.error(er);
  }
})(); */

/* (async () => {
  try {
    await fsp.appendFile(__dirname + "/input.txt", newData, {
      encoding: "utf-8",
    });
    console.log("Data saved successfully");
  } catch (er) {
    console.error(er);
  }
})(); */
