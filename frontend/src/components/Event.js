import React from 'react'
import { Card } from 'react-bootstrap'

//fix import and event parameter
//change button icons to only appear upon hover and overlap with image


const Event = {{event}} => {
  return (
  <Card>
    <Card.Img variant="top" src={event.image} rounded />
      <Button variant="light"><i class="fa-regular fa-heart"></i></Button>
      <Button variant="light"><i class="fa-solid fa-share"></i></Button>
    <Card.Body>
      <Card.Title as='div'> {event.name} </Card.Title>
      <Card.Text as='div'> {event.date}, {event.time} </Card.Text>
      <Card.Text as='div'> {event.location} </Card.Text>
      <Card.Text as='div'> From {event.minCost} </Card.Text>
      <Card.Text as='div'> {event.organizerName} </Card.Text>
      <Card.Text as='div'> <i class="fa-solid fa-person"></i> {event.followers} followers </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Event