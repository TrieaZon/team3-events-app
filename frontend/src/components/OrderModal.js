import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col,
  Button, Modal, Form,
  InputGroup,
} from 'react-bootstrap';
import FormContainer from './FormContainer';

const OrderModal = ({setOrderShow, setCheckoutShow}) => {

  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();


  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormContainer>
        <Row>
                  <Col>
                  <Row>
                    <h4>Billing Information</h4>
                    <span>
                      <button>
                        Log in
                      </button>
                      for a faster experience.
                    </span>
                    <div>
                      *Required
                    </div>
                    <Form>
                      <Row className="mb-3">
                        <Col>
                        <Form.Control
                        label="First name"
                        placeholder="First name"
                        required />
                        </Col>
                        <Col>
                        <Form.Control
                        label="Last name"
                        placeholder="Last name"
                        required />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col}
                        required
                        controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col}
                        required
                        controlId="formGridEmail">
                          <Form.Label>Confirm Email</Form.Label>
                          <Form.Control type="email" placeholder="confirm email" />
                        </Form.Group>
                      </Row>
                      <Row>
                        <InputGroup className="mb-3">
                          <InputGroup.Checkbox aria-label="Keep me updated on more events and news from this event organizer." />
                          <Form.Control aria-label="Keep me updated on more events and news from this event organizer."/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroup.Checkbox aria-label="Send me emails about the best events happening nearby or online." />
                          <Form.Control aria-label="Send me emails about the best events happening nearby or online." />
                        </InputGroup>
                      </Row>
                      <Row>
                        <Form.Group
                          required
                          controlId="cell phone">
                          <Form.Label>cell phone</Form.Label>
                          <Form.Control type="cell phone" placeholder="cell phone" />
                        </Form.Group>
                      </Row>
                    </Form>
                  </Row>
                </Col>
              </Row>
        </FormContainer>
      </Modal.Body>
      <Modal.Footer>
      <Button
        onClick={() => setOrderShow(false)}
      >
        X
      </Button>
      </Modal.Footer>
    </>
  )
}

export default OrderModal