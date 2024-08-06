import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import moment from 'moment';
import RoomSearchResults from '../RoomSearchResult';
import RoomTypeSelector from '../RoomTypeSelector';

const RoomSearch = ({ fetchAvailableRooms, availableRooms: rooms }) => {
  const [searchQuery, setSearchQuery] = useState({
    checkInDate: '',
    checkOutDate: '',
    roomType: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [availableRooms, setAvailableRooms] = useState(rooms);

  useEffect(() => {
    setAvailableRooms(rooms);
  }, [rooms]);

  const handleSearch = (e) => {
    e.preventDefault();
    const checkInMoment = moment(searchQuery.checkInDate);
    const checkOutMoment = moment(searchQuery.checkOutDate);
    if (!checkInMoment.isValid() || !checkOutMoment.isValid()) {
      setErrorMessage('Please enter valid dates');
      return;
    }
    if (!checkOutMoment.isSameOrAfter(checkInMoment)) {
      setErrorMessage('Check-out date must be after check-in date');
      return;
    }
    fetchAvailableRooms(searchQuery.checkInDate, searchQuery.checkOutDate, searchQuery.roomType);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery({ ...searchQuery, [name]: value });
    const checkInDate = moment(searchQuery.checkInDate);
    const checkOutDate = moment(searchQuery.checkOutDate);
    if (checkInDate.isValid() && checkOutDate.isValid()) {
      setErrorMessage('');
    }
  };
  const handleClearSearch = () => {
    setSearchQuery({
      checkInDate: '',
      checkOutDate: '',
      roomType: ''
    });
    setAvailableRooms([]);
  };

  return (
    <React.Fragment>
      <Container className="shadow mt-4 mb-4 py-5">
        <Form onSubmit={handleSearch}>
          <Row className="justify-content-center">
            <Col xs={12} md={3}>
              <Form.Group controlId="checkInDate">
                <Form.Label>Check-in Date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkInDate"
                  value={searchQuery.checkInDate}
                  onChange={handleInputChange}
                  min={moment().format('YYYY-MM-DD')}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="checkOutDate">
                <Form.Label>Check-out Date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkOutDate"
                  value={searchQuery.checkOutDate}
                  onChange={handleInputChange}
                  min={moment().format('YYYY-MM-DD')}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="roomType">
                <Form.Label>Room Type</Form.Label>
                <div className="d-flex">
                  <RoomTypeSelector
                    handleRoomInputChange={handleInputChange}
                    newRoom={searchQuery}
                  />
                </div>
              </Form.Group>
            </Col>
            <Col xs={12} md={9} >
              <Button variant="secondary" type="submit" style={{ width: '100%', marginTop: '1rem' }}>
                  Search
              </Button>
            </Col>
          </Row>
        </Form>

        {availableRooms
          ? <RoomSearchResults results={availableRooms} onClearSearch={handleClearSearch} />
          : <p className="mt-4">No rooms available for the selected dates and room type.</p>}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </Container>
    </React.Fragment>
  );
};

export default RoomSearch;
