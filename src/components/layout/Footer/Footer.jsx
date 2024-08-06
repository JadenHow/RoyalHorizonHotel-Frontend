import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  const today = new Date();

  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col xs={12} md={12} className="text-center">
            <p className="mb-0"> &copy; {today.getFullYear()} <span style={{ color: '#DAA520' }}>Royal Horizon Hotel</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
