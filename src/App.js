import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';import { FormControl } from 'react-bootstrap';import { FormControl } from 'react-bootstrap';


function App() {
  return (
    <div>


      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '150px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action2">Contact US</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Page-1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Page-2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Page-3</NavDropdown.Item>
              </NavDropdown>

            </Nav>


            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>


        </Container>

      </Navbar>


    </div>

  );
}

export default App;
