import {React,useState} from 'react'
import NoteList from './NoteList'
import {nanoid} from 'nanoid'

import './App.css';

function Homepage() {
    const [notes, setnotes] = useState([
     {
       id: nanoid(),
       text: 'This is an Example of Note. You can delete is you want',
       date: 'Date'
     },
    ]);
    const addnote=(text)=>{
       const date = new Date();
       const newNote ={
         id: nanoid(),
         text: text,
         date: date.toLocaleDateString()
       }
       const newNotes = [...notes,newNote];
       setnotes(newNotes);
    };
    const deletenote=(id)=>{
        const newNote1 = notes.filter((note)=>note.id !==id );
        console.log(id);
        setnotes(newNote1);
    };
    return (
    <>
         <div class="row justify-content-between m-3">
    <div className="col-7">
    <h2 className='text-left'>Home Page</h2>
    </div>
    <div className="col-4">
    {/* <Button className='text-center' variant="dark" onClick={addnote}>New Note</Button> */}
    </div>
  </div>
        {/* <div className="example-content-main"> <h2>Home Page</h2> 
        </div>
          
        <div className="example-content-secondary"><Button variant="dark">New Note</Button>
        </div> */}  
        <NoteList notes={notes} handleAddnote={addnote} handleDeleteNote={deletenote}/>
        </>
    //      <Container>
    //     <div className="row">
    //      <Container>
    //         <Form>
    //              <Row>
    //                 <Col> <h2 className=' m-3' >Home Page</h2></Col>
    //               <Col > <Button className='m-3' variant="dark">New Note</Button></Col>
    //           </Row>
    //          <div className=" nn d-flex flex-row ">  </div>
    //          <div className=" nn d-flex flex-row-reverse ">  </div>
    //           </Form>
    //           </Container> 
           
    //       <NoteList notes={notes}/>
    //   </div>
    //    </Container>  
    )
}

export default Homepage
