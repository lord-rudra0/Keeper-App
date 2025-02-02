//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
import React from "react";

function Note()
{
    return (
        <div className="note">
            <h1>This is Heading of Note</h1>
            <p>This is Body</p>
        </div>
    );
}

export default Note;