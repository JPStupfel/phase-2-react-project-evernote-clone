import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [notes, setNotes] = useState([])
  const [content, setContent] = useState({status: 'no note selected'})
  const [searchBy, setSearchBy] = useState('')

  const filterNotes = notes.length ? notes.filter(e=>e.title.toLowerCase().includes(searchBy.toLowerCase())) : notes

  useEffect(
    ()=>fetch('http://localhost:3000/notes').then(r=>r.json()).then(data=>setNotes(data)),[]
  )
  
  function onClickNoteItem(obj){setContent(obj)}

  function updateContent(obj){
    const newNoteList=[...notes, obj]
    setNotes(newNoteList)
  }

  


  return (
    <>
      <Search setSearchBy={setSearchBy}/>
      <div className="container">
        <Sidebar onClickNoteItem={onClickNoteItem} notes={filterNotes} />
        <Content updateContent={updateContent} content={content} />
      </div>
    </>
  );
}

export default NoteContainer;

//fetch and states can live here