import React from "react";
// import notes from "../notes"


// function Take_Notes(props){
//     return <div>
        
//         <h1>{props.title}</h1>
//         <p>{props.content}</p>
//     </div>

// }



function Note(props)
{
    return (
        <div className="note">
            {/* <h1>This is Heading of Note</h1>
            <p>This is Body</p> */}
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;