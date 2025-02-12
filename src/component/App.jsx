import React from "react";
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Note from "./Note.jsx"
import notes from "../notes.js";
import CreateArea from "./CreateArea.jsx";




function App() {
    return (<div><Header />
        <CreateArea />
        {/* // takeTitle={takeTitle}
        // takeContent={takeContent} */}

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
//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/