import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, onClickNoteItem, onClickNewButton}) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList onClickNoteItem={onClickNoteItem} notes={notes} />
      <button onClick={onClickNewButton}>New</button>
    </div>
  );
}

export default Sidebar;
