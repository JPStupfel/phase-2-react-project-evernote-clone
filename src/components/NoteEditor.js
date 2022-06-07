import React, {useState} from "react";

function NoteEditor({content, updateContentPatch}) {

  const [noteAdd, setNoteAdd] = useState(content)



  function handleChange(event){
    const newNote = {...noteAdd, [event.target.name]: event.target.value}
    setNoteAdd(newNote)
  }

  function handlePostRequest(obj){
    
    fetch(`http://localhost:3000/notes/${content.id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(obj)
    }
    )
    .then(res=>res.json())
    .then(data=>{updateContentPatch(data); setNoteAdd({title: '', body:'', userId:1})})
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



//   return (
//     <form className="note-editor">
//       <input type="text" name="title" />
//       <textarea name="body" />
//       <div className="button-row">
//         <input className="button" type="submit" value="Save" />
//         <button type="button">Cancel</button>
//       </div>
//     </form>
//   );
// }

export default NoteEditor;



