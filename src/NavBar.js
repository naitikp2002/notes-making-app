import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,Container,NavLink} from 'react-bootstrap'

function NavBar() {
    return (
       
        <div>
        <Navbar bg="primary" variant="dark" collapseOnSelect>
     <Container fluid>
    <Navbar.Brand href="#">Notes</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
        
        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar
