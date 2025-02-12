import React, { useState } from "react";

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
    
    e.preventDefault();
  }

  function deleteNotes(e) {
    props.deleteNotes(note);
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title"
          onChange={handleChange} value={note.title} />


        <textarea name="content" placeholder="Take a note..." rows="3"
          value={note.content} onChange={handleChange} />
        {/* <div>{note.takeContent}</div> */}
        {/* <div>{note.takeContent}</div> */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;


