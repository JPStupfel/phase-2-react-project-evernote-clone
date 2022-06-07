import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [notes, setNotes] = useState([])
  const [content, setContent] = useState({})

  //can be 4 options: noNote, showNote, editNote, addNote
  const [contentStatus, setContentStatus]=useState('noNote')

  const [searchBy, setSearchBy] = useState('')

  const filterNotes = notes.length ? notes.filter(e=>e.title.toLowerCase().includes(searchBy.toLowerCase())) : notes

  useEffect(
    ()=>fetch('http://localhost:3000/notes').then(r=>r.json()).then(data=>setNotes(data)),[]
  )
  

  function onClickNoteItem(obj){
    setContent(obj)
    setContentStatus('showNote')
  }

  function updateContent(obj){
    const newNoteList=[...notes, obj]
    setNotes(newNoteList)
  }

  function onClickNewButton(){
    setContentStatus('addNote')
  }

  function onCLickEditButton(){
    setContentStatus('editNote')
  }
  


  return (
    <>
      <Search setSearchBy={setSearchBy}/>
      <div className="container">
        <Sidebar 

        setContentStatus={setContentStatus}
        onClickNoteItem= {onClickNoteItem} 
        onClickNewButton={onClickNewButton}
        notes={filterNotes} />
        <Content
        updateContent={updateContent} contentStatus={contentStatus} 
        content={content}
        onCLickEditButton={onCLickEditButton}
        />
      </div>
    </>
  );
}

export default NoteContainer;

//fetch and states can live here