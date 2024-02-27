import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Image,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  createOrder,
  getOrderDetails,
  getPaypalKey,
  payOrder,
} from "../actions/orderActions";
import Message from "./Message";
import Loader from "./Loader";
import { ORDER_PAY_RESET } from "../constants/orderConstants";
import CustomPayPalButton from "./CustomPayPalButton";

const OrderModal = ({ setOrderShow }) => {
  const [qty, setQty] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [deliveryEmail, setDeliveryEmail] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [createdOrder, setCreatedOrder] = useState();

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const updatedSummary = {};
  const eventDetails = useSelector((state) => state.eventDetails);
  const { loading, event, error } = eventDetails;
  let updatedEventDetails = new Date(event.date).toLocaleDateString();

  //   Calculate prices
  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    updatedSummary.eventPrice = addDecimals(Number(event.minCost * qty));
    updatedSummary.taxPrice = addDecimals(
      Number((0.15 * updatedSummary.eventPrice).toFixed(2))
    );
    updatedSummary.totalPrice = (
      Number(updatedSummary.eventPrice) + Number(updatedSummary.taxPrice)
    ).toFixed(2);
  }

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay, paypalkey } = orderPay;

  useEffect(() => {
    if (!createdOrder) {
      return;
    }
    dispatch(getPaypalKey());

    if (successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(id));
    }
  }, [dispatch, successPay, id, createdOrder]);

  const placeOrderHandler = () => {
    setCreatedOrder({
      orderItems: [
        {
          name: event.name,
          qty,
          image: event.image,
          price: event.minCost,
          event: event._id,
        },
      ],
      deliveryEmail: deliveryEmail,
      paymentMethod: paymentMethod,
      itemsPrice: updatedSummary.eventPrice,
      taxPrice: updatedSummary.taxPrice,
      totalPrice: updatedSummary.totalPrice,
    });
    console.log(`test ${createdOrder}`);
  };

  const addCount = () => {
    if (qty < 10) {
      setQty(qty + 1);
    }
  };

  const minusCount = () => {
    if (qty !== 0) {
      setQty(qty - 1);
    }
  };

  // const [paymentMethod, setPaymentMethod] = useState('PayPal')

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   dispatch(savePaymentMethod(paymentMethod))
  //   navigate('/placeorder')
  // }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Row className="m-1">
        <Modal.Header closeButton>
          <Modal.Title className="flex-grow-1 d-flex justify-content-center py-2 px-4 fw-bold fs-3">
            Checkout
          </Modal.Title>
        </Modal.Header>
      </Row>

      <Modal.Body>
        <Container fluid="xxl" className="fs-5">
          <Row className="my-4">
            <Form id="orderForm">
              <Row>
                <Form.Group as={Col} required controlId="firstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control label="First name" placeholder="" required />
                </Form.Group>

                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control label="Last name" placeholder="" required />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} required controlId="formEmail">
                  <Form.Label>Billing Email</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group as={Col} required controlId="formEmail">
                  <Form.Label>Delivery Email</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) => setDeliveryEmail(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} required controlId="cellPhone">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col} required>
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Check
                    type="radio"
                    label="PayPal or Credit Card"
                    id="PayPal"
                    name="paymentMethod"
                    value="PayPal"
                    checked
                  />
                </Form.Group>
              </Row>
            </Form>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <Image src={`${event.image}`} thumbnail />
              <ListGroup variant="flush" className="border border-0">
                <ListGroupItem className="border border-0">
                  <h5>{updatedEventDetails}</h5>
                  <h4 className="fw-bold">{event.name}!</h4>
                </ListGroupItem>
                <ListGroupItem className="border border-0">
                  <span className="">{event.description}</span>
                </ListGroupItem>
                <ListGroupItem className="border border-0">
                  <h4 className="fw-bold">Date and Time</h4>
                  <span className="fst-italic">
                    {event.startTime} - {event.endTime}
                  </span>
                </ListGroupItem>
                <ListGroupItem className="border border-0">
                  <h4 className="fw-bold">Location</h4>
                  <h5 className="fst-italic fw-bold">{event.venue}</h5>
                  <span>{event.address}</span>
                  <p className="">
                    {event.city}, {event.state} {event.zipcode}
                  </p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col className="">
              <ListGroup variant="flush" className="border border-2">
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row className="">
                    <Col>Items</Col>
                    <Col className="d-flex flex-row-reverse">
                      ${updatedSummary.eventPrice}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Delivery Email</Col>
                    <Col className="d-flex flex-row-reverse">
                      {deliveryEmail}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col className="d-flex flex-row-reverse">
                      ${updatedSummary.taxPrice}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col className="d-flex flex-row-reverse">
                      ${updatedSummary.totalPrice}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="border border-0">
                  {error && <Message variant="danger">{error}</Message>}
                </ListGroup.Item>
                <ListGroup.Item className="border border-0">
                  <Row className="">
                    <Col className="d-flex px-1">
                      <Button
                        type="button"
                        className=""
                        variant="primary"
                        disabled={qty === 0}
                        onClick={minusCount}
                      >
                        <i class="fa-sharp fa-solid fa-minus"></i>
                      </Button>

                      <h5 className="pt-2 mx-3 ">{qty}</h5>

                      <Button
                        type="button"
                        className=""
                        variant="primary"
                        onClick={addCount}
                      >
                        <i class="fa-sharp fa-solid fa-plus"></i>
                      </Button>
                    </Col>

                    <Col className="d-flex">
                      <Button
                        type="button"
                        className="ms-auto"
                        variant="success"
                        disabled={qty === 0}
                        onClick={placeOrderHandler}
                      >
                        Confirm Order
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>

                {/* <CustomPayPalButton
                  paypalkey={paypalkey}
                  updatedSummary={updatedSummary}
                  deliveryEmail={deliveryEmail}
                  id={id}
                  dispatch={dispatch}
                  payOrder={payOrder} /> */}
                
                {
                  
                  paypalkey && 
                  (
                    <ListGroup.Item>
                      {loadingPay && <Loader />}
                      <PayPalScriptProvider
                        options={{
                          "client-id": paypalkey,
                          components: "buttons",
                          currency: "USD",
                        }}
                      >
                        <PayPalButtons
                          style={{ layout: "horizontal" }}
                          createOrder={(createdOrder, actions) => {
                            return actions.order
                              .create({
                                purchase_units: [
                                  {
                                    amount: {
                                      currency_code: "USD",
                                      value: updatedSummary.totalPrice,
                                    },
                                  },
                                ],
                              })
                              .then((id) => {
                                // Your code here after create the order
                                return id;
                              });
                          }}
                          onApprove={function (data, actions) {
                            return actions.createdOrder
                              .capture()
                              .then(function () {
                                // Your code here after capture the order
                                let paymentResult = {
                                  id: data.paymentID,
                                  status: "Paid",
                                  update_time: new Date().getDate().toString(),
                                  email_address: deliveryEmail,
                                };
                                dispatch(payOrder(id, paymentResult));
                              });
                          }}
                        />
                      </PayPalScriptProvider>
                    </ListGroup.Item>
                  )
                }
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Row className="mt-auto mx-1">
        <Modal.Footer className="">
          <Button
            type="submit"
            onSubmit={() => {
              setOrderShow(false);
            }}
            variant="success"
            form="orderForm"
          >
            Checkout
          </Button>
        </Modal.Footer>
      </Row>
    </>
  );
};

export default OrderModal;
