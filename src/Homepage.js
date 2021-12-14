import {React,useState} from 'react'
import NoteList from './NoteList'
import {nanoid} from 'nanoid'
import { Button, Form, Row,Col, Stack, Container } from 'react-bootstrap';
import './App.css';
function Homepage() {
    const [notes, setnotes] = useState([
     {
       id: nanoid(),
       text: '',
       date: 'dd/mm/yyyy'
     },
     {
        id: nanoid(),
        text: '',
        date: 'dd/mm/yyyy'
      },
      {
        id: nanoid(),
        text: '',
        date: 'dd/mm/yyyy'
      },
     
    ]);
    return (
    <>
         <div class="row justify-content-between m-3">
    <div className="col-7">
    <h2 className='text-left'>Home Page</h2>
    </div>
    <div className="col-4">
    <Button className='text-center' variant="dark">New Note</Button>
    </div>
  </div>
       
                {/* <div className="example-content-main"> <h2>Home Page</h2> 
               </div>
        
                <div className="example-content-secondary"><Button variant="dark">New Note</Button>
                </div> */}
      
            
             <NoteList notes={notes}/>
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
