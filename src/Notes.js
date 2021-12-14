import {React,useState} from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'


function Notes({id,text,date}) {
    
    return (
        <div className='m-3'>
            <Card Card border="primary"  style={{ width: 'auto' }}>
            <Card.Body>
            <Card.Title>{date}</Card.Title>
            <Card.Text>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">            
            <Form.Control as="textarea" style={{ height: 125 }} placeholder='Enter yout text here' >{text}</Form.Control>
            </Form.Group>
            </Form>
            </Card.Text>
            <Button variant="dark m-2"  >Add Note</Button>
            <Button variant="dark me-3" >Delete</Button>
            </Card.Body>
            </Card>
            </div>
            )
}

export default Notes
