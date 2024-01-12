import React from 'react'
import { Carousel } from 'react-bootstrap'

//fix import
//add more images for carousel, how?  https://react-bootstrap.netlify.app/docs/components/carousel
//map through event data

const EventScreen = () => {
  return (
    <>
    <Container>
      <Row>
        <Image variant="top" src={event.image} rounded />    
        <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel> 
      </Row>
    </Container>

      
      <Container>
        <Row> {event.name} </Row>
        <Row> {event.briefDescription} </Row>
        <Row> {event.organizer} </Row>
      </Container>

      <Container>
        <Row> {event.minCost} </Row>
      </Container>

      <Container>
        <Row> Date and Time {event.date}, {event.time} </Row>
        <Row> Location {event.location} </Row>
        <Row> Refund Policy </Row>
        <Row> Agenda {event.time} {event.activity} </Row>
        <Row> About {event.duration} </Row>
        <Row> {event.description}</Row>
        <Row> Tags {event.tags}</Row>
        <Row> About the organizer {event.organizerName} </Row>
        <Row> <i class="fa-solid fa-person"></i> {event.followers} followers </Row>
      </Container>
    </>
  )
}

export default EventScreen