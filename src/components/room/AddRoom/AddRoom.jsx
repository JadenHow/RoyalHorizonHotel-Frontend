import RoomTypeSelector from 'components/common/RoomTypeSelector';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddRoom = ({ createRoom, isLoading, error }) => {
  const [newRoom, setNewRoom] = useState({
    image: null,
    roomType: '',
    roomPrice: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRoomInputChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'roomPrice') {
      if (value && !isNaN(value)) {
        value = parseInt(value);
      } else {
        value = '';
      }
    }
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setNewRoom({ ...newRoom, image: selectedImage });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { image, roomType, roomPrice } = newRoom;
    createRoom({ image, roomType, roomPrice });
  };

  useEffect(() => {
    if (isLoading) {
      setErrorMessage('');
      setSuccessMessage('');
    } else {
      if (error) {
        setSuccessMessage('');
        setErrorMessage(error);
      } else if (error === false) {
        setSuccessMessage('Room created successfully');
        setErrorMessage('');
        setNewRoom({ photo: null, roomType: '', roomPrice: '' });
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
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="mt-5 mb-2">Add a New Room</h2>

          {successMessage && (
            <Alert variant="success" dismissible>
              {successMessage}
            </Alert>
          )}

          {errorMessage && (
            <Alert variant="danger" dismissible>
              {errorMessage}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="roomType">
              <Form.Label>Room Type</Form.Label>
              <RoomTypeSelector handleRoomInputChange={handleRoomInputChange} newRoom={newRoom} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="roomPrice">
              <Form.Label>Room Price</Form.Label>
              <Form.Control
                required
                type="number"
                name="roomPrice"
                value={newRoom.roomPrice}
                onChange={handleRoomInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Room image</Form.Label>
              <Form.Control
                name="image"
                type="file"
                onChange={handleImageChange}
              />
            </Form.Group>

            <div className="d-grid gap-2 d-md-flex mt-2">
              <Link to="/existing-rooms" className="btn btn-outline-info">
                Existing rooms
              </Link>
              <Button type="submit" variant="outline-primary" className="ml-5">
                Save Room
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddRoom;
