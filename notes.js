const chalk = require("chalk");
const fs = require("fs");
const getNotes = (name) => {
  return `${name} these are your notes...`;
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicates = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicates.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.blue.bold("New notes added"));
  } else {
    console.log(chalk.red.bold("Note title taken!"));
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const duplicates = notes.filter((note) => {
    return note.title === title;
  });
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (duplicates.length === 0) {
    console.log(chalk.red("No notes found"));
  } else {
    saveNotes(notesToKeep);
    console.log(chalk.green.bold("Note removed "));
  }
};

const listNotes = () => {
  console.log(chalk.green.inverse("Your notes"));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
};
const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);
  debugger;
  if (noteToRead) {
    console.log(
      `title:${chalk.blue(noteToRead.title)}\nbody:${noteToRead.body}`
    );
  } else {
    console.log(chalk.red.inverse(`Note not found`));
  }
  //console.log(noteToRead);
  //console.log(!noteToRead);
};

module.exports = {
  getNotes,
  addNotes,
  removeNotes,
  listNotes,
  readNote,
};
