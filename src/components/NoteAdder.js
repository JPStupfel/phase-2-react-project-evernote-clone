import React, {useState} from "react";

function NoteAdder({content, updateContentPost}) {

  const [noteAdd, setNoteAdd] = useState({...content,title:'Untitiled Note', body: 'Write your note here'})

  function handleChange(event){
    const newNote = {...noteAdd, [event.target.name]: event.target.value}
    setNoteAdd(newNote)
  }

  function handlePostRequest(obj){
    console.log('post:', obj)
    fetch('http://localhost:3000/notes',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(obj)
    }
    )
    .then(res=>res.json())
    .then(data=>{updateContentPost(data); setNoteAdd({title: '', body:'', userId:1})})
    .catch(error=>alert(error))

  }

  function handleSave(event){
    event.preventDefault()
    handlePostRequest(noteAdd)

  }

  return (
    <form onSubmit={handleSave} className="note-editor">
      <input onChange={handleChange} type="text" name="title" value={noteAdd.title}/>


      <textarea onChange={handleChange} name="body" value={noteAdd.body}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteAdder;



