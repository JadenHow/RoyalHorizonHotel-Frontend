import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Alert, Button, Card, Col, Form, FormControl, Row } from 'react-bootstrap';
import BookingSummary from '../BookingSummary';
import { useParams } from 'react-router-dom';

const BookingForm = ({ saveBooking, bookingConfirmationCode, roomById, isLoading, error }) => {
  const [validated, setValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [roomPrice, setRoomPrice] = useState(0);
  const { roomId } = useParams();

  const currentUser = localStorage.getItem('userId');

  const [booking, setBooking] = useState({
    guestFullName: '',
    guestEmail: currentUser,
    checkInDate: '',
    checkOutDate: '',
    numOfAdults: '',
    numOfChildren: ''
  });

  const calculatePayment = () => {
    const checkInDate = moment(booking.checkInDate);
    const checkOutDate = moment(booking.checkOutDate);
    const diffInDays = checkOutDate.diff(checkInDate, 'days');
    const paymentPerDay = roomPrice ?? 0;
    return diffInDays * paymentPerDay;
  };

  const isGuestCountValid = () => {
    const adultCount = parseInt(booking.numOfAdults);
    const childrenCount = parseInt(booking.numOfChildren);
    const totalCount = adultCount + childrenCount;
    return totalCount >= 1 && adultCount >= 1;
  };

  const isCheckOutDateValid = () => {
    if (!moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))) {
      setErrorMessage('Check-out date must be after check-in date');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  useEffect(() => {
    setRoomPrice(roomById?.roomPrice);
  }, [roomById]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false || !isGuestCountValid() || !isCheckOutDateValid()) {
      e.stopPropagation();
    } else {
      setIsSubmitted(true);
    }
    setValidated(true);
  };

  const handleFormSubmit = () => {
    saveBooking({ roomId, bookingRequest: booking });
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isLoading) {
      setErrorMessage('');
      setSuccessMessage('');
    } else {
      if (error) {
        setSuccessMessage('');
        setErrorMessage(error);
      } else if (error === false && isSubmitted) {
        setSuccessMessage('Booking created successfully.');
        setErrorMessage('');
      } else {
        setErrorMessage('');
        setSuccessMessage('');
      }
    }

    const timeout = setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [error, isLoading, isSubmitted]);

  return (
    <React.Fragment>
      {errorMessage && (
        <Alert variant="danger" dismissible>
          {errorMessage}
        </Alert>
      )}

      {successMessage && (
        <Alert variant="success" dismissible>
          {successMessage}
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <Card className="mt-2 mb-4">
            <Card.Body>
              <Card.Title>Reserve Room</Card.Title>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Form.Group>
                    <Form.Label htmlFor="guestFullName">
                      Fullname
                    </Form.Label>
                    <FormControl
                      required
                      type="text"
                      id="guestFullName"
                      name="guestFullName"
                      value={booking.guestFullName}
                      placeholder="Enter your fullname"
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your fullname.
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <Form.Group>
                    <Form.Label htmlFor="guestEmail">
                      Email
                    </Form.Label>
                    <FormControl
                      required
                      type="email"
                      id="guestEmail"
                      name="guestEmail"
                      value={booking.guestEmail}
                      placeholder="Enter your email"
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>

                <Card.Title>Lodging Period</Card.Title>
                <div style={{ marginBottom: '1rem' }}>
                  <Row>
                    <Col xs={6}>
                      <Form.Label htmlFor="checkInDate" >
                        Check-in date
                      </Form.Label>
                      <FormControl
                        required
                        type="date"
                        id="checkInDate"
                        name="checkInDate"
                        value={booking.checkInDate}
                        placeholder="check-in-date"
                        min={moment().format('YYYY-MM-DD')}
                        onChange={handleInputChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please select a check-in date.
                      </Form.Control.Feedback>
                    </Col>

                    <Col xs={6}>
                      <Form.Label htmlFor="checkOutDate" >
                        Check-out date
                      </Form.Label>
                      <FormControl
                        required
                        type="date"
                        id="checkOutDate"
                        name="checkOutDate"
                        value={booking.checkOutDate}
                        placeholder="check-out-date"
                        min={moment().format('YYYY-MM-DD')}
                        onChange={handleInputChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please select a check-out date.
                      </Form.Control.Feedback>
                    </Col>
                  </Row>
                </div>

                <Card.Title>Number of Guest</Card.Title>
                <Row>
                  <Col xs={6}>
                    <Form.Label htmlFor="numOfAdults" >
                      Adults
                    </Form.Label>
                    <FormControl
                      required
                      type="number"
                      id="numOfAdults"
                      name="numOfAdults"
                      value={booking.numOfAdults}
                      min={1}
                      placeholder="0"
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please select at least 1 adult.
                    </Form.Control.Feedback>
                  </Col>
                  <Col xs={6}>
                    <Form.Label htmlFor="numOfChildren" >
                      Children
                    </Form.Label>
                    <FormControl
                      required
                      type="number"
                      id="numOfChildren"
                      name="numOfChildren"
                      value={booking.numOfChildren}
                      placeholder="0"
                      min={0}
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Select 0 if no children.
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                <Form.Group className="mt-2 mb-2">
                  {!isSubmitted && <Button type="submit">
                    Continue
                  </Button>}
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          {isSubmitted && (
            <BookingSummary
              booking={booking}
              payment={calculatePayment()}
              onConfirm={handleFormSubmit}
              isFormValid={validated}
              bookingConfirmationCode={bookingConfirmationCode}
            />
          )}
        </Col>

      </Row>
    </React.Fragment>
  );
};
export default BookingForm;
