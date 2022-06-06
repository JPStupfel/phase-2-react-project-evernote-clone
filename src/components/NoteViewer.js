import React from "react";

function NoteViewer({content}) {
  return (
    <>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
