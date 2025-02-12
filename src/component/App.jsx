import React from "react";
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Note from "./Note.jsx"
import notes from "../notes.js";
import CreateArea from "./CreateArea.jsx";




function App() {

    function addNote(note) {
        console.log(note)
    }

    return (<div><Header />
        <CreateArea onAdd={addNote} />
        {notes.map((note) => <Note
            key={note.key}
            id={note.key}
            title={note.title}
            content={note.content} />
        )}
        <Footer />
    </div>);
}

export default App;
