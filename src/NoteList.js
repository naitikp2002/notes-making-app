import React from 'react'
import Notes from './Notes'
import Addnote from './Addnote'
function NoteList({notes, handleAddnote}) {
    return (

        <div>
            {notes.map((note)=>(
            <Notes  id={note.id} text={note.text} date={note.date} handleAddnote={ handleAddnote} />
            ))}  
            <Addnote  handleAddnote={ handleAddnote}/>          
        </div>
    )
}

export default NoteList
