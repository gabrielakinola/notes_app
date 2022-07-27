const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const chalk = require("chalk");
const fs = require("fs");
const notes = require("./notes");

//fs.writeFileSync("note.txt", "My name is Gabriel");

//fs.appendFileSync("note.txt", "\nI am 23 years old");

// const msg = getNotes("gabby");
// console.log(msg);

// console.log(chalk.bold.blue("Hello World"));
//console.log(process.argv[2]);
// const command = process.argv[2];
// command === "add"
//   ? console.log("adding notes")
//   : command === "remove"
//   ? console.log("Removing notes")
//   : console.log("enter your command");
//console.log(process.argv);

//add , remove, read, and list

//Create Add command
// yargs.command("add", "add a new notes", () => {
//   console.log("kkd");
// }).argv;

// yargs
//   .command("remove", "remove a note", () => console.log("Removing notes"))
//   .parse();
// yargs.command("del", "remove ", () => console.log("Removing notes")).parse();

yargs(hideBin(process.argv))
  .command(
    "add",
    "add a new notes",
    {
      title: { describe: "Note title", demandOption: true, type: "string" },
      body: {
        describe: "Note body",
        demandOption: true,
        type: "string",
      },
    },
    (argv) => {
      notes.addNotes(argv.title, argv.body);
    }
  )
  .parse();

yargs(hideBin(process.argv))
  .command(
    "remove",
    "Remove a note",
    {
      title: { describe: "Note title", demandOption: true, type: "string" },
    },
    (argv) => {
      notes.removeNotes(argv.title);
    }
  )
  .parse();

// yargs(hideBin(process.argv)).command("list", "List your note", () => {
//   console.log("Listing out all notes");
// });
// demandCommand(1).parse();

// yargs(hideBin(process.argv)).command("read", "Read your note", () => {
//   console.log("Reading a note");
// });
// demandCommand(1).parse()
