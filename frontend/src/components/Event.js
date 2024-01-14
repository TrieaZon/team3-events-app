import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'


//fix import and event parameter
//change button icons to only appear upon hover and overlap with image
//<Card.Text as='div'> {event.organizerName} </Card.Text>
//<Card.Text as='div'> <i class="fa-solid fa-person"></i> {event.followers} followers </Card.Text>


const Event = ({event}) => {
  return (
  <Card>
    <Link to={`/event/${event._id}`}>
    <Card.Img variant="top" src={event.image} rounded />
      <Button variant="light"><i class="fa-regular fa-heart"></i></Button>
      <Button variant="light"><i class="fa-solid fa-share"></i></Button>
      </Link>
    <Card.Body>
    <Link to={`/event/${event._id}`}>
      <Card.Title as='div'> {event.name} </Card.Title>
      </Link>
      <Card.Text as='div'> {event.date}, {event.startTime}-{event.endTime}  </Card.Text>
      <Card.Text as='div'> {event.venue}, {event.address} </Card.Text>
      <Card.Text as='div'> From {event.minCost} </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Event