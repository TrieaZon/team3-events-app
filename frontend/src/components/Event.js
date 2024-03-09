import React from 'react'
import { Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './event.css'

//change button icons to only appear upon hover and overlap with image
//<Card.Text as='div'> {event.organizerName} </Card.Text>
//<Card.Text as='div'> <i class="fa-solid fa-person"></i> {event.followers} followers </Card.Text>


const Event = ({event}) => {

  let updatedEvent = {}
  updatedEvent.date = new Date(event.date).toLocaleDateString() 

  return (
  <Card className='border border-0 my-3 mx-1 rounded-bottom-4 btn-light'>
    <Link to={`/events/${event._id}`}>
    <Card.Img className="rounded image show-icons" variant="top" src={event.image} />
    <div className="btn-group my-2 icons hide">
      <Button variant="light" className="m-1 p-1 btn-rounded"><i class="fa-regular fa-heart"></i></Button>
      <Button variant="light" className="m-1 p-1 btn-rounded"><i class="fa-solid fa-share"></i></Button>
      </div>
      </Link>

    <Card.Body>
    <Link to={`/events/${event._id}`}>
      <Card.Title as='div'> {event.name} </Card.Title>
      </Link>
      <Card.Text as='div'> {updatedEvent.date}, {event.startTime}-{event.endTime}  </Card.Text>
      <Card.Text as='div'> {event.venue}, {event.address} </Card.Text>
      <Card.Text as='div'> {event.costYes ? `From $ ${event.minCost}`: 'Free'} </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Event