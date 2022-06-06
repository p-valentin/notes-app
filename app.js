const notes  = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

//add, remove, read, list

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>  notes.addNote(argv.title, argv.body)
});

//Create remove command
yargs.command ({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe:"Title of a note",
            demandOption: true,
            type: 'string'
        }
    },
    handler:  (argv) => notes.removeNote(argv.title)
});

//Create list command 
yargs.command ({
    command: 'list',
    describe: 'list all the notes',
    handler:  () => notes.listNotes()
});

//Create read command
yargs.command ({
    command: 'read',
    describe: 'read notes',
    builder: {
        title: {
            describe:"Title of a note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNote(argv.title)
});

yargs.parse();

