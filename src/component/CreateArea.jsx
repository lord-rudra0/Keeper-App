import React, { useState } from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [note, setNote] = useState({ title: "", content: "" });
  const [Expanded, setExpanded] = useState(false)

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

  function ExpandArea() {
    setExpanded(true)
  }
  return (

    <div>
      <form className="create-note">
        {Expanded && <input name="title" placeholder="Title"
          onChange={handleChange} value={note.title} />

        }

        <textarea name="content" placeholder="Take a note..." rows={Expanded ? 3 : 1} onClick={ExpandArea}
          value={note.content} onChange={handleChange} />
        {/* <div>{note.takeContent}</div> */}
        {/* <div>{note.takeContent}</div> */}
        <Zoom in={Expanded ? true : false}>
          <Fab onClick={submitNote}><NoteAddIcon /> </Fab>
        </Zoom>
      </form>
    </div>

  );
}

export default CreateArea;


