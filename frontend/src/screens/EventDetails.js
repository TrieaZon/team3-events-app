import React from 'react';
// import events from '../events.js'
import { Container, Image, Button, Row, Col, Carousel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const EventDetails = ({ events }) => {
    const { id } = useParams();
    const event = events.find(e => e._id === id)
    console.log(`id ${id}`);
    console.log(`events: ${events}`);
    console.log(`event: ${event}`)

    return (
        <>
            <Container fluid="xxl" className="px-md-5 my-4 pb-2">
                
                    <Carousel className="w-75 mx-auto">
                        <Carousel.Item className="">
                            <img 
                                className="d-flex w-100 h-100 rounded-5" 
                                src={event.image}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                
            </Container>
                    
            <Container fluid="xxl" className="px-md-5">
                <Row>
                    <Col sm={10}>
                        <ListGroup variant='flush' className="border border-0">
                            
                            <ListGroupItem className="border border-0 my-3">
                                <h5>{event.date}</h5>
                                <h1 className="fw-bold">{event.name}!</h1>
                            </ListGroupItem>
                            <ListGroupItem className="border border-0">
                                <span className="fs-5">{event.description}</span>
                            </ListGroupItem>
                            <ListGroupItem className="border border-0 my-4">
                                <h3 className="fw-bold">Date and Time</h3>
                                <span>{event.startTime} - {event.endTime}</span> 
                            </ListGroupItem>
                            <ListGroupItem className="border border-0">
                                <h3 className="fw-bold">Location</h3>
                                <span></span> 
                            </ListGroupItem>
                        </ListGroup>
                        
                    </Col>
                    <Col sm={2}>
                        test
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default EventDetails;