const fs = require("fs");
const getNotes = require("./notes");

fs.writeFileSync("note.txt", "My name is Gabriel");

fs.appendFileSync("note.txt", "\nI am 23 years old");

const msg = getNotes("gabby");
console.log(msg);
