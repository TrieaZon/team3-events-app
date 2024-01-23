import React from 'react'
import { Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './event.css'

//change button icons to only appear upon hover and overlap with image
//<Card.Text as='div'> {event.organizerName} </Card.Text>
//<Card.Text as='div'> <i class="fa-solid fa-person"></i> {event.followers} followers </Card.Text>


const Event = ({event}) => {
  return (
  <Card className= 'border border-0 my-3 mx-1 rounded-bottom-4 btn-light'>
    <Link to={`/event/${event._id}`}>
    <Card.Img className="rounded image" variant="top" src={event.image} />
    <div className="icons">
      <Button variant="light"><i class="fa-regular fa-heart"></i></Button>
      <Button variant="light"><i class="fa-solid fa-share"></i></Button>
      </div>
      </Link>
    <Card.Body>
    <Link to={`/event/${event._id}`}>
      <Card.Title as='div'> {event.name} </Card.Title>
      </Link>
      <Card.Text as='div'> {event.date}, {event.startTime}-{event.endTime}  </Card.Text>
      <Card.Text as='div'> {event.venue}, {event.address} </Card.Text>
      <Card.Text as='div'> {event.costYes ? `From $ ${event.minCost}`: 'Free'} </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Event