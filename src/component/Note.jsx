import React from "react";
import CreateArea from "./CreateArea";



function Note(props) {
    return (
        <div className="note">
            <h1>{props.id}</h1>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;