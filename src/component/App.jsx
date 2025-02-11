import React from "react";
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Note from "./Note.jsx"
import notes from "../notes.js";




function App() {
    return (<div><Header />
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