import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <Container fluid className="bg-primary text-light">
            <Row>
                <Col className="text-center py-3">Copyright &copy;EventsApp</Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;