import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';

function CreateArea(props) {

  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value
      }

    });
    console.log(note)
  }

  function submitNote(e) {

    props.onAdd(note);
    setNote(
      {
        title: "",
        content: ""
      }
    )
    e.preventDefault();
  }

  function deleteNotes(e) {
    props.deleteNotes(note);
    e.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title"
          onChange={handleChange} value={note.title} />


        <textarea name="content" placeholder="Take a note..." rows="3"
          value={note.content} onChange={handleChange} />
        {/* <div>{note.takeContent}</div> */}
        {/* <div>{note.takeContent}</div> */}
        <Fab onClick={submitNote}><NoteAddIcon /> </Fab>
      </form>
    </div>
  );
}

export default CreateArea;


