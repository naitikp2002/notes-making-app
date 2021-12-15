import React from 'react'
import Notes from './Notes'
import Addnote from './Addnote'
import './App.css';
function NoteList({notes, handleAddnote,handleDeleteNote}) {
    return (

        <div className='container'>
            {notes.map((note)=>(
            <Notes  id={note.id} text={note.text} date={note.date} handleAddnote={ handleAddnote} handleDeleteNote={handleDeleteNote} />
            ))}  
            <Addnote  handleAddnote={ handleAddnote}   />          
        </div>
    )
}

export default NoteList
