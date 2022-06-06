import React from "react";

function NoteItem({note, onClickNoteItem}) {

  let trunc = note.body.slice(0,100)

  return (
    <li onClick={()=>onClickNoteItem(note)}>
      <h2>{note.title}</h2>
      <p>{`${trunc}...`}</p>
    </li>
  );
}

export default NoteItem;
