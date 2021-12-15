import {React,useState} from 'react'
import NoteList from './NoteList'
import nextId from "react-id-generator";
import './App.css';

function Homepage() {
    const [notes, setnotes] = useState([
     {
       id: nextId(),
       text: 'This is an Example of Note. You can delete is you want',
       date: 'Date'
     },
    ]);

    const addnote=(text)=>{
       const date = new Date();
       const newNote ={
         id: nextId(),
         text: text,
         date: date.toLocaleDateString()
       }
       const newNotes = [...notes,newNote];
       setnotes(newNotes);
       
    };
    const deletenote=(id)=>{
        
        const newNote1 = notes.filter((note)=>note.id !== id );
        setnotes(newNote1);
           
    };
    return (
    <>  
        <h2 className='text-center'>Notes</h2>
        <NoteList notes={notes} handleAddnote={addnote} handleDeleteNote={deletenote}/>
        </>
    
    )
}

export default Homepage
