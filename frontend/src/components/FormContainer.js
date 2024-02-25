import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const FormContainer = ({children}) => {
  return (
    <Container fluid='xxl' className="d-flex my-3">
      <Row className="flex-grow-1">
        <Col className="flex-column" xs={12} md={8}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer