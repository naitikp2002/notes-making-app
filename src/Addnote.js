import React from 'react'
import {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

function Addnote({ handleAddnote}) {
const [notetext, setnotetext] = useState("");

   const handlechange=(event)=>{
      setnotetext( event.target.value);
      
   }
  
   const handlesaveclick=()=>{
    handleAddnote(notetext);
 }
    return (
        <div>
             <div className='m-3'>
            <Card Card border="primary"  style={{ width: 'auto' }}>
            <Card.Body>
            <Card.Title>dd/mm/yyyy</Card.Title>
            <Card.Text>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">            
            <Form.Control as="textarea" value= {notetext} style={{ height: 125 }} placeholder='Enter yout text here'onChange={handlechange}/>{/*{text}</Form.Control> */}
            </Form.Group>
            </Form>
            </Card.Text>
            <Button variant="dark m-2"  onClick={ handlesaveclick}>Add Note</Button>
            <Button variant="dark me-3" >Delete</Button>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Addnote
