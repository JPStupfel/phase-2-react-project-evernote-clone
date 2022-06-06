import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onClickNoteItem}) {

  const notesList = notes.map((e)=><NoteItem onClickNoteItem={onClickNoteItem} note={e} key={e.id}/>)

  return (
    <ul>
      {notesList}
      
    </ul>
  );
}

export default NoteList;
