import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, onClickNoteItem}) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList onClickNoteItem={onClickNoteItem} notes={notes} />
      <button onClick={()=>onClickNoteItem({id: 'new'})}>New</button>
    </div>
  );
}

export default Sidebar;
