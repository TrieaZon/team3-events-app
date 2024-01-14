import React from 'react'
import events from '../events.js'
import Event from '../components/Event.js'
import {Col, Row} from 'react-bootstrap'


const HomeScreen = () => {
  return (
    <>
    <h1>Events near me</h1>
    <Row> 
      {events.map(e => (
      <Col sm={12} md={6} lg={4} xl={3}>
      <Event event={e} />
      </Col>
    ))
    }
    </Row>
    </>
  )
}

export default HomeScreen