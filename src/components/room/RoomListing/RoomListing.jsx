import React from 'react';
import Room from '../Room';
import { Container, Row } from 'react-bootstrap';

const RoomListing = () => {
  return (
    <Container fluid className="bg-light p-2 mb-5 mt-5 shadow">
      <Row>
        <Room />
      </Row>
    </Container>
  );
};

export default RoomListing;
