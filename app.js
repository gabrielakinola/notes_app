const chalk = require("chalk");
const fs = require("fs");
const { argv } = require("process");
const getNotes = require("./notes");

//fs.writeFileSync("note.txt", "My name is Gabriel");

//fs.appendFileSync("note.txt", "\nI am 23 years old");

// const msg = getNotes("gabby");
// console.log(msg);

// console.log(chalk.bold.blue("Hello World"));
//console.log(process.argv[2]);
const command = process.argv[2];
command === "add"
  ? console.log("adding notes")
  : command === "remove"
  ? console.log("Removing notes")
  : console.log("enter your command");
