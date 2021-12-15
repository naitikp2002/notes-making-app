import {React,useState} from 'react'
import NoteList from './NoteList'
import {nanoid} from 'nanoid'
import { Button, Form, Row,Col, Stack, Container } from 'react-bootstrap';
import './App.css';
import Notes from './Notes';
function Homepage() {
    const [notes, setnotes] = useState([
     {
       id: nanoid(),
       text: 'This is an Example of Note. ',
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
    return (
    <>
         <div class="row justify-content-between m-3">
    <div className="col-7">
    <h2 className='text-left'>Home Page</h2>
    </div>
    <div className="col-4">
    <Button className='text-center' variant="dark" onClick={addnote}>New Note</Button>
    </div>
  </div>
       
        {/* <div className="example-content-main"> <h2>Home Page</h2> 
        </div>
          
        <div className="example-content-secondary"><Button variant="dark">New Note</Button>
        </div> */}
        
              
        <NoteList notes={notes} handleAddnote={addnote}/>
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
