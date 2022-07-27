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
    console.log("New notes added");
  } else {
    console.log("Note title taken!");
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
module.exports = {
  getNotes,
  addNotes,
  removeNotes,
};
