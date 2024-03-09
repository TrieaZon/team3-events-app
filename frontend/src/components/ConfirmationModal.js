import React from 'react';
import {Container, Row, Modal,
} from 'react-bootstrap';

const ConfirmationModal = ({ setConfirmationShow }) => {


  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title className="mx-auto flex-grow-1 d-flex justify-content-center fw-bold fs-1">Order Complete!</Modal.Title>
      </Modal.Header>
      <Modal.Body >

      <Container className="mx-auto flex-grow-1 d-flex justify-content-center">
        <Row> 
          <h3>Check your delivery email for your tickets!</h3>
        </Row>
      </Container>
        
        

        {/* <Row>    
          <h4>Check your delivery email for your tickets!</h4>
        </Row> */}
        
      </Modal.Body>
    </>
  )
}

export default ConfirmationModal