import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {Container, Row, Col,
  Button, Modal, Form,
  InputGroup,
} from 'react-bootstrap';
import FormContainer from './FormContainer';

const CheckoutModal = ({setCheckoutShow}) => {

    const [paymentMethod, setPaymentMethod] = useState('Paypal');

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
                      <Row>
                        <h4>Payment Method</h4>
                        <Form.Group>
                            <Form.Label as='legend'> Select Payment Method       </Form.Label>
                            <Col>
                              <Form.Check
                                type='radio'
                                label='Paypal'
                                id='Paypal'
                                value='Paypal'
                                name='paymentMethod'
                                checked
                                onChange={(e) => setPaymentMethod(e.target.value)}>
                              </Form.Check>
                            </Col>
                            <Form.Check
                              type='radio'
                              label='Credit Card'
                              id='CreditCard'
                              value='CreditCard'
                              name='paymentMethod'
                              checked
                              onChange={(e) => setPaymentMethod(e.target.value)}
                              >
                            </Form.Check>
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
        onClick={() => setCheckoutShow(false)}
      >
        X
      </Button>
      </Modal.Footer>
    </>
  )
}

export default CheckoutModal