import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [notes, setNotes] = useState([])
  const [content, setContent] = useState({})

  useEffect(
    ()=>fetch('http://localhost:3000/notes').then(r=>r.json()).then(data=>setNotes(data)),[]
  )
  
  function onClickNoteItem(obj){setContent(obj)}

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar onClickNoteItem={onClickNoteItem} notes={notes} />
        <Content content={content} />
      </div>
    </>
  );
}

export default NoteContainer;

//fetch and states can live here