import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Default from 'assets/Asset_DefaultRoom.jpg';

const RoomCard = ({ room }) => {
  const { id, roomType, roomPrice, image } = room;
  return (
    <Col key={id} className="mb-4" xs={12}>
      <Card>
        <Card.Body className="d-flex flex-wrap align-items-center">
          <div className="flex-shrink-0 mr-3 mb-3 mb-md-0">
            <Link to={`/book-room/${id}`}>
              <Card.Img
                variant="top"
                src={image ? `https://ucarecdn.com/${image}/` : Default}
                alt="Room Photo"
                style={{ width: '100%', maxWidth: '12.5rem', height: 'auto' }}
              />
            </Link>
          </div>
          <div className="flex-grow-1 ml-3 px-5">
            <Card.Title className="hotel-color">{roomType}</Card.Title>
            <Card.Title className="room-price">{roomPrice} / night</Card.Title>
            <Card.Text>Some room information goes here for the guest to read through</Card.Text>
          </div>
          <div className="flex-shrink-0 mt-3">
            <Link to={`/book-room/${id}`} className="btn btn-hotel btn-sm">
              Book Now
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
