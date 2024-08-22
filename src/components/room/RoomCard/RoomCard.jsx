import React from 'react';
import { Card, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Default from 'assets/Asset_DefaultRoom.jpg';
import { useWindowSize } from 'contexts/WindowSizeContext';

const RoomCard = ({ room, bookDisable }) => {
  const { id, roomType, roomPrice, image } = room;
  const { isXSmall, isSmall } = useWindowSize();
  const small = isXSmall || isSmall;

  return (
    <Col key={id} className="mb-4" xs={12}>
      <Card className="h-100">
        <Card.Body className="d-flex flex-wrap align-items-center">
          <div className={small ? 'd-flex justify-content-center align-items-center w-100 mr-3 mb-3 mb-md-0' : 'flex-shrink-0 mr-3 mb-3 mb-md-0'}>
            <Link to={`/book-room/${id}`}>
              <Image
                src={image ? `https://ucarecdn.com/${image}/` : Default}
                alt="Room Photo"
                fluid
                rounded
                style={{ width: '100%', maxWidth: '12.5rem', height: 'auto' }}
              />
            </Link>
          </div>
          <div className="flex-grow-1 ml-3 px-5">
            <Card.Title className="hotel-color">{roomType}</Card.Title>
            <Card.Text className="room-price">{roomPrice} / night</Card.Text>
            <Card.Text>Some room information goes here for the guest to read through</Card.Text>
          </div>
          {!bookDisable && <div className="flex-shrink-0 mt-3">
            <Link to={`/book-room/${id}`}>
              <Button variant="primary" size="sm">
                Book Now
              </Button>
            </Link>
          </div>}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
