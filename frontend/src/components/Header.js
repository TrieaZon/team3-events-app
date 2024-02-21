import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown, Button, Form, Col} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
                    
                    <Navbar.Toggle aria-controls='basic-navbar-nav ' className="ms-2 me-2 px-2" />
                    
                    <Navbar.Collapse className="flex-grow-0 ms-3 me-2" id='basic-navbar-nav'>
                        <Nav className='fw-bold ms-auto'>
                            <LinkContainer to='/events'> 
                            <Nav.Link as={Button} className="rounded-5" variant="light">Find Events</Nav.Link>
                            </LinkContainer>
                           <LinkContainer to='/organizer'>  
                           <Nav.Link as={Button} className="rounded-5" variant="light">Create Events</Nav.Link>
                           </LinkContainer>
                            {/* Help center still needs dropdown window controls */}
                            <LinkContainer to='/help'> 
                            <Nav.Link as={Button} className="rounded-5" variant="light" >Help Center</Nav.Link>
                            </LinkContainer>

                            {userInfo ? 
                            (<NavDropdown className="me-3" title={userInfo.name} id='username'>
                           <LinkContainer to='/profile'>  
                           <Nav.Link as={Button} className="rounded-5" variant="light"><i className='fas fa-user'></i>  Profile</Nav.Link>
                           </LinkContainer>
                            <LinkContainer to='/'> 
                            <Nav.Link as={Button} className="rounded-5" variant="light" onClick={logoutHandler}>Logout</Nav.Link>
                            </LinkContainer>
                            </NavDropdown>
                            ) : (<LinkContainer to='/login'>
                                    <Nav.Link as={Button} className="rounded-5" variant="light" href='/login'>Log In</Nav.Link>
                                </LinkContainer>
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