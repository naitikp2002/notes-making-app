import {React,useState} from 'react'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'


function Notes() {
    const [note, setnote] = useState("")
    return (
        <div className='m-3'>
            <Card style={{ width: 'auto'  }}>
            <Card.Body>
            <Card.Title>Note Title</Card.Title>
            <Card.Text>
            <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            
            <Form.Control as="textarea" rows={3} />
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
