import React from 'react';
import {Container, Modal, ListGroup, ListGroupItem,
} from 'react-bootstrap';

const ConfirmationModal = ({ setConfirmationShow }) => {


  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title className="mx-auto flex-grow-1 d-flex justify-content-center fw-bold fs-1">Order Complete!</Modal.Title>
      </Modal.Header>
      <Modal.Body >

      <Container className="mx-auto flex-grow-1 d-flex justify-content-center">
        <ListGroup>
          <ListGroupItem className='border border-0'>
            <h3>Check your delivery email for your tickets!</h3>
          </ListGroupItem>
          <ListGroupItem className='border border-0 fs-4 fw-bold'>
            <br />
            <br />
            <em>
              "Thank you for exploring our Eventbrite learning clone!"
            </em>
            <br />
            <br />
            <em>
              "Normally, the 'Confirm Order' button would take you through the paypal process.
              However, because we can't guarantee everyone seeing this will use a paypal sandbox, we've disabled the process."
            </em>
            <br />
            <br />
            <em>
              "We encourage you to take a look at our video demonstration in the Readme section in GitHub if you want to see the payment process through completion."
            </em>
            <br />
            <br />
            <br />
            <em>
              "Thanks again!"
            </em>
          </ListGroupItem>

        </ListGroup>
          
        <ListGroup>
          <ListGroupItem className='border border-0'>
            <h3>Check your delivery email for your tickets!</h3>
          </ListGroupItem>
          <ListGroupItem className='border border-0 fs-4 fw-bold'>
            <br />
            <br />
            <em>
              "Thank you for exploring our Eventbrite learning clone!"
            </em>
            <br />
            <br />
            <em>
              "Normally, the 'Confirm Order' button would take you through the paypal process.
              However, because we can't guarantee everyone seeing this will use a paypal sandbox, we've disabled the process."
            </em>
            <br />
            <br />
            <em>
              "We encourage you to take a look at our video demonstration in the Readme section in GitHub if you want to see the payment process through completion."
            </em>
            <br />
            <br />
            <br />
            <em>
              "Thanks again!"
            </em>
          </ListGroupItem>

        </ListGroup>
          
      </Container>
        
        

        {/* <Row>    
          <h4>Check your delivery email for your tickets!</h4>
        </Row> */}
        
      </Modal.Body>
    </>
  )
}

export default ConfirmationModal