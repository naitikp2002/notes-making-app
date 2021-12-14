import React from 'react'
import Notes from './Notes'

function NoteList({notes}) {
    return (

        <div>
            {notes.map((note)=>(
            <Notes  id={note.id} text={note.text} date={note.date} />
            ))}  
            {/* <Notes/>          */}
        </div>
    )
}

export default NoteList
