import React from "react";
import NoteEditor from "./NoteEditor";
import NoteAdder from "./NoteAdder"
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({content, contentStatus, updateContent, onCLickEditButton}) {

  const getContent = () => {
    if (contentStatus==='addNote') {
      return <NoteAdder updateContent={updateContent} content={content}/>;
    } 
    else if (contentStatus==='editNote'){
      return <NoteEditor />
    }
    else if (contentStatus==='showNote') {
      return <NoteViewer onCLickEditButton={onCLickEditButton} content={content}/>;
    } 
    else {
      return <Instructions />;
    }
  };
  
  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
