import React from 'react';
import { Container, Navbar, Nav, Button, Form } from 'react-bootstrap';


const Header = () => {
    return (
        
        <Container fluid className="px-0 m-0">
            <header>
                <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
                    <Navbar.Brand className="px-2" href="/">Event Tracker</Navbar.Brand>
                
                    <Form inline className="d-inline-flex flex-grow-1 p-2 bd-highlight">
                        <Form.Control
                        type="text"
                        placeholder="Search for Event"
                        className=""
                        />
                        <Button type="submit" className="mx-2 btn btn-info">Submit</Button>
                    </Form>
                    
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className="mx-2 px-2" />
                    
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/events'>Find Events</Nav.Link>
                            <Nav.Link href='/organizer'>Create Events</Nav.Link>
                            {/* Help center needs dropdown window controls */}
                            <Nav.Link href='/help'>Help Center</Nav.Link>
                            <Nav.Link href='/signin'>Log In</Nav.Link>
                            <Nav.Link href='/signin/signup'>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </Container>
    );
};

export default Header;