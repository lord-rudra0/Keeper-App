import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({ takeTitle: "", takeContent: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value
      }
    });

  }

  function submitNote(e) {

    props.onAdd();
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title"
          onChange={handleChange} value={note.takeTitle} />


        <textarea name="content" placeholder="Take a note..." rows="3"
          value={note.takeContent} onChange={handleChange} />
        <div>{note.takeContent}</div>
        <div>{note.takeContent}</div>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.