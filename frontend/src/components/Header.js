import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown, Button, Form, Col} from 'react-bootstrap';
import { logout } from '../actions/userActions'


const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    
    const logoutHandler = () => {
        dispatch(logout())
    }
    

    return (
        
        <Container fluid className="px-0">
            <header>
                <Navbar expand="md" className="bg-primary" data-bs-theme="dark">
                    <Navbar.Brand className="fw-bold px-2 m-0" href="/">EventApp</Navbar.Brand>
                    
                    <Col>
                        <Form className="flex-grow-1 px-4 bd-highlight">
                        <Form.Control
                            size=""
                            type="text"
                            placeholder="Search Events"
                            className="rounded-5"
                        />
                        {/*<Button type="submit" className="ms-2 btn btn-info fs-6">Submit</Button> */}
                        </Form>
                    </Col>
                    
                    <Navbar.Toggle aria-controls='basic-navbar-nav' className="ms-2 me-2 px-2" />
                    
                    <Navbar.Collapse className="flex-grow-0 ms-3 me-2" id='basic-navbar-nav'>
                        <Nav className='fw-bold ms-auto'>
                            <Nav.Link as={Button} className="rounded-5" variant="light" href='/events'>Find Events</Nav.Link>
                            <Nav.Link as={Button} className="rounded-5" variant="light" href='/organizer'>Create Events</Nav.Link>
                            {/* Help center still needs dropdown window controls */}
                            <Nav.Link as={Button} className="rounded-5" variant="light" href='/help'>Help Center</Nav.Link>

                            {userInfo ? 
                            (<NavDropdown title={userInfo.name} id='username'>
                            <Nav.Link as={Button} className="rounded-5" variant="light" href='/profile'><i className='fas fa-user'></i>  Profile</Nav.Link>
                            <Nav.Link as={Button} className="rounded-5" variant="light" onClick={logoutHandler}>Logout</Nav.Link>
                            </NavDropdown>
                            ) : ( 
                                <Nav.Link as={Button} className="rounded-5" variant="light" href='/login'>Log In</Nav.Link>
                                // (<Nav.Link as={Button} className="rounded-5" variant="light" href='/signup'>Sign Up</Nav.Link>
                            )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </Container>
    );
};

export default Header;