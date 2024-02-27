import React from "react";
import { ListGroup } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CustomPayPalButton = ({
  paypalkey,
  updatedSummary = {},
  deliveryEmail,
  dispatch = () => {},
  payOrder = () => {},
  id,
}) => {
  return ("to do");

  return (
    <ListGroup.Item className="border border-0">
      this is a test
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
            return actions.createdOrder.capture().then(function () {
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
  );
};

export default CustomPayPalButton;
