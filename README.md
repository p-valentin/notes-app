# Chat app

A simple note taking app which uses CLI.
All the notes are saved locally inside the ```notes.json``` file

### Installing 

Before running any commands run ```npm install``` to install all the required dependencies.

### Using the application

This is the list with the avaiable commands:

* ```node app.js add --title="Title example" --body="Body example"``` will create a note
* ```node app.js remove --title="Title example"``` will remove the note with the provided title
* ```node app.js list``` will print all the titles of the existing notes
* ```node app.js read --title="Title example"``` will print the note with the existing title alongside the note's body
