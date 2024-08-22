import React, { useEffect, useState } from 'react';
import { Alert, Button, Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const EditRoom = ({ updateRoom, fetchRoomById, roomById, isLoading, error }) => {
  const [room, setRoom] = useState({
    image: null,
    roomType: '',
    roomPrice: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { roomId } = useParams();
  const [needsRefresh, setNeedsRefresh] = useState(false);
  const [oldImage, setOldImage] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setRoom({ ...room, image: selectedImage });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoom({ ...room, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { image, roomType, roomPrice } = room;
    updateRoom({ roomId, newImage: image, oldImage, roomType, roomPrice });
    setNeedsRefresh(true);
  };

  useEffect(() => {
    setRoom({ ...roomById, image: null });
    setOldImage(roomById?.image);
  }, [roomById]);

  useEffect(() => {
    if (needsRefresh && !isLoading) {
      fetchRoomById({ roomId });
      setNeedsRefresh(false);
    }
  }, [needsRefresh, isLoading, fetchRoomById, roomId]);

  useEffect(() => {
    if (isLoading) {
      setErrorMessage('');
      setSuccessMessage('');
    } else {
      if (error) {
        setSuccessMessage('');
        setErrorMessage(error);
      } else if (error === false) {
        setSuccessMessage('Room updated successfully');
        setErrorMessage('');
      } else {
        setErrorMessage('');
        setSuccessMessage('');
      }
    }

    setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
    }, 3000);
  }, [error, isLoading]);

  return (
    <Container className="mt-5 mb-5">
      <h3 className="text-center mb-5 mt-5">Edit Room</h3>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          {successMessage && (
            <Alert variant="success" role="alert">
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert variant="danger" role="alert">
              {errorMessage}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="roomType" className="mb-3">
              <Form.Label className="hotel-color">Room Type</Form.Label>
              <Form.Control
                type="text"
                name="roomType"
                value={room?.roomType}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="roomPrice" className="mb-3">
              <Form.Label className="hotel-color">Room Price</Form.Label>
              <Form.Control
                type="number"
                name="roomPrice"
                value={room?.roomPrice}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="photo" className="mb-3">
              <Form.Label className="hotel-color">Photo</Form.Label>
              <Form.Control
                type="file"
                name="photo"
                onChange={handleImageChange}
              />
              {oldImage && <Carousel>
                <Carousel.Item>
                  <img
                    src={`https://ucarecdn.com/${oldImage}/`}
                    alt=""
                    style={{ height: '28.125rem', width: '40rem', objectFit: 'cover', marginTop: '1rem' }}
                  />
                </Carousel.Item>
              </Carousel>}
            </Form.Group>
            <div className="d-grid gap-2 d-md-flex mt-2">
              <Button as={Link} to="/existing-rooms" variant="outline-info">
                Back
              </Button>
              <Button type="submit" variant="outline-warning">
                Edit Room
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditRoom;
