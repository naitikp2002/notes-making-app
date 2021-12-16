import {React,useState,useEffect} from 'react'
import NoteList from './NoteList'
import nextId from "react-id-generator";
import './App.css';

function Homepage() {
    const [notes, setnotes] = useState([
     {   
       id: nextId(),
       text: 'This is an Example of Note. You can delete This if you want',
       date: 'Date'
     },
    ]);

    useEffect(() => {
      const savenote= JSON.parse(localStorage.getItem('react-notes-app-data'));
      if(savenote)
      {
        setnotes(savenote);
      }
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
     }, []); 
    useEffect(() => {
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
}, [notes]);
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
        <h1 className='text-center m-3 'style={ {color:"white"}}>Notes</h1>
        <NoteList notes={notes} handleAddnote={addnote} handleDeleteNote={deletenote}/>
        </>
    
    )
}

export default Homepage
