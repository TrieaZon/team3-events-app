import React, { useState, useEffect } from 'react';
import { Container, Row,
    Col, Carousel, ListGroup, 
    ListGroupItem, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listEventDetails } from '../actions/eventActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import OrderModal from '../components/OrderModal';
import ConfirmationModal from '../components/ConfirmationModal';

const EventDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const [orderShow, setOrderShow] = useState(false);
    const [confirmationShow, setConfirmationShow] = useState(false);

    const handleOrderClose = () => setOrderShow(false);
    const handleOrderShow = () => setOrderShow(true);
    const handleConfirmationClose = () => setConfirmationShow(false);
    const handleConfirmationShow = () => setConfirmationShow(true);
   
    useEffect(() => {
        dispatch(listEventDetails(id))
    },[dispatch, id]);

    const eventDetails = useSelector((state) => state.eventDetails);
    const {loading, event, error} = eventDetails;
    let updatedEventDetails = new Date(event.date).toLocaleDateString()

    return (
        <>
            {
                loading ? (<Loader />) :
                error ? (<Message variant='danger'>{error}</Message>) :
                (
                    <>
                        <Container fluid="xxl" className="px-md-5 my-4 pb-2">
                            <Row>
                                <Col sm={12}>
                                    <Carousel className="event-hero">                    
                                        <Carousel.Item className="">  
                                            <img
                                                                              
                                                src={event.image}
                                                className="p-10"
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                            </Row>    
                        </Container>
                                
                        <Container fluid="xxl" className="px-md-5">
                            <Row>
                                <Col sm={9}>
                                    <ListGroup variant='flush' className="border border-0">
                                        
                                        <ListGroupItem className="border border-0 my-3">
                                            <h5>{updatedEventDetails}</h5>
                                            <h1 className="fw-bold">{event.name}!</h1>
                                        </ListGroupItem>
                                        <ListGroupItem className="border border-0 my-3">
                                            <span className="fs-5">{event.description}</span>
                                        </ListGroupItem>
                                        <ListGroupItem className="border border-0 my-5">
                                            <h3 className="fw-bold">Date and Time</h3>
                                            <span className="fst-italic">{event.startTime} - {event.endTime}</span> 
                                        </ListGroupItem>
                                        <ListGroupItem className="border border-0 my-5">
                                            <h3 className="fw-bold">Location</h3>
                                            <h5 className="fst-italic fw-bold">{event.venue}</h5>
                                            <span>{event.address}</span>
                                            <p className=''>{event.city}, {event.state} {event.zipcode}</p>
                                        </ListGroupItem>

                                    </ListGroup>                  
                                </Col>
                                <Col sm={3}>
                                    <ListGroup className="rounded-4">

                                        <ListGroupItem className="border border-bottom-0">
                                            <Row>
                                                <Col className="d-flex justify-content-center fw-bold fs-5">
                                                    <span className="">${event.minCost}</span>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                        <ListGroupItem className="border border-top-0">
                                            <Row>
                                                <Col className='d-grid gap-2'>
                                                    <Button 
                                                        onClick={handleOrderShow}
                                                        disabled={event.ticketNum === 0}
                                                        size='lg'
                                                        variant='danger'
                                                    > Get tickets!
                                                    </Button>
                                                        
                                                    {/* <Nav href="/local-events" className="d-flex justify-content-center mb-1 rounded-2 px-0 py-1 bg-danger" >
                                                        <LinkContainer>
                                                            <Nav.Link as={Button} className="text-light fw-bold">
                                                                <span>Get tickets</span>
                                                            </Nav.Link>
                                                        </LinkContainer> */}
                                                    {/* </Nav> */}
                                                </Col>
                                            </Row>
                                        </ListGroupItem>

                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    
                        <Modal
                            show={orderShow}
                            onHide={handleOrderClose}
                            backdrop='static'
                            keyboard={false}
                            fullscreen={true}
                            aria-labelledby="order window"
                            className='d-flex justify-content-center mt-5 pt-3'
                        >
                            {<OrderModal setOrderShow={setOrderShow} setConfirmationShow={setConfirmationShow} />}
                        </Modal>

                        <Modal
                            show={confirmationShow}
                            onHide={handleConfirmationClose}
                            backdrop='static'
                            keyboard={false}
                            fullscreen={true}
                            aria-labelledby='confirmation window'
                            className='d-flex justify-content-center mt-5 pt-3'
                        >
                            {<ConfirmationModal setConfirmationShow={setConfirmationShow} />}
                        </Modal>
                    
                    </>
                )
            };
        </>
    );
};

export default EventDetails;