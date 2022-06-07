import React from "react";

function NoteViewer({content, onCLickEditButton}) {
  return (
    <>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
      <button onClick={onCLickEditButton}>Edit</button>
    </>
  );
}

export default NoteViewer;
