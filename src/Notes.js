import {React} from 'react'
import { Button } from 'react-bootstrap'


function Notes({text,id,date,handleDeleteNote}) {
    
    return (
        <div className='m-3'>
            <div className="card">
  <h5 className="card-header">{date}</h5>
  <div className="card-body">
   
    <p className="card-text" style={{ height: 125 },{outerWidth: 100},{whiteSpace: 'pre-wrap'}}>{text}</p>
    <Button variant="dark me-3" onClick={()=>handleDeleteNote(id)} >Delete </Button>
  </div>
</div>
            {/* <Card Card border="primary"  style={{ width: 'auto' }}>
            <Card.Body>
            <Card.Title>{date}</Card.Title>
            <Card.Text>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">            
            <Form.Control as="textarea" style={{ height: 125 }} placeholder='Enter yout text here' >{text}</Form.Control>
            </Form.Group>
            </Form>
            </Card.Text> */}
             {/* {<Button variant="dark m-2" onClick={handleAddnote} >Add Note</Button>} */}
            {/* <Button variant="dark me-3" onClick={()=>handleDeleteNote(id)} >Delete{id} </Button>
             </Card.Body>
            </Card> */}
            </div>
            )
}

export default Notes
