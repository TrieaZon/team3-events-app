import React, { useState } from 'react'
import {Container, Row, Col, Button, Modal} from 'react-bootstrap'
import FormContainer from './FormContainer'
import { createEvent } from '..'

const CheckoutModal = ({setShow}) => {


  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Form will go here.
      </Modal.Body>
      <Modal.Footer>
      <Button
        onClick={() => setShow(false)}
      >
        X
      </Button>
      </Modal.Footer>
    </>
  )
}

export default CheckoutModal