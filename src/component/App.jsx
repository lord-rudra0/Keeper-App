import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([])
    function addNote(note) {
        console.log(note)
        setNotes((prevNotes) => {
            return [...prevNotes, note]
        })
    }

    function deleteNotes(id) {
        setNotes((note) => {
            return note.filter(noteItem,index)
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => {

                return <Note title={note.title}
                    key={index}
                    id={index}
                    content={note.content}
                    onDelete={deleteNotes}
                />
            })}

            <Footer />
        </div>
    );
}

export default App;


