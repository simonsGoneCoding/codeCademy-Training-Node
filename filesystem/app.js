const fs = require("fs");
const readline = require("readline");

//Read file
fs.readFile("textFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Something went wrong ${err}`);
  } else {
    console.log(`Context of required file is as follows:\n${data}`);
  }
});

//Readable Streams
const myInterface = readline.createInterface({
  input: fs.createReadStream("shoppingList.txt"),
});

const printData = (data) => console.log(`Item: ${data}`);

myInterface.on("line", printData);
