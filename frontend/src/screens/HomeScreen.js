import React from 'react'
import events from '../events.js'
import Event from '../components/Event.js'
import Banner from '../components/Banner.js'
import { Container, Col, Row } from 'react-bootstrap'


const HomeScreen = () => {
  return (
    <>
      <Banner />
      <Container fluid="xxl" className="px-md-5">
        <h1>Events near me</h1>
        <Row> 
          {events.map(e => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Event event={e} />
          </Col>
          ))
        }
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
