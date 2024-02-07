import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Event from '../components/Event.js'
import Banner from '../components/Banner.js'
import { Container, Col, Row } from 'react-bootstrap'
import { listEvents } from '../actions/eventActions';
import Loader from '../components/Loader';
import Message from '../components/Message';


const HomeScreen = () => {

  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listEvents())
    },[dispatch])

    const eventList = useSelector((state) => state.eventList)
    const {loading, events, error} = eventList

  return (
    <>
      {
        loading ? (<Loader />) :
          error ? (<Message variant='danger'>{error}</Message>) :
          (
            <>
              <Banner />
              <Container fluid="xxl" className="px-md-5">
                <h1>Events near me</h1>
                <Row>
                  {events.map(e => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                      <Event event={e} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </>
          )
        
      }
    </>
  )
}

export default HomeScreen
