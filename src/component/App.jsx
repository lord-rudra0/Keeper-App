import React from "react";
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Note from "./Note.jsx"
import notes from "../notes.js";
import CreateArea from "./CreateArea.jsx";




function App() {
    return (<div><Header />
        <CreateArea
            takeTitle={takeTitle}
            takeContent={takeContent}
        />
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
