const fs = require('fs');
const chalk = require('chalk');

const addNote = function(title, body){
     const notes = loadNotes();
     const duplicateNote = notes.find((note) => note.title === title)


     if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added'));
     }else {
         console.log(chalk.red.inverse("Note title taken"));
     }
     

     
};

const removeNote = (title) => {
    const notes = loadNotes();

    const keptNotes = notes.filter((note) =>  note.title !== title)

    if(notes.length > keptNotes.length){
        
        console.log(chalk.green.inverse('Note removed'));
    }else{
        console.log(chalk.red.inverse("No note with this title"))
}

    
    saveNotes(keptNotes);
};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(chalk.green(note.title))
    });
    
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((noteTitle) => noteTitle.title === title)

    if(note){
        console.log(chalk.green(note.title));
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse("No note found by this title"))
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    
    } catch (e) {
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}