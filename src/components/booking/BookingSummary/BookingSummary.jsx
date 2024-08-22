import React, { useState } from 'react';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Alert, Card, Col, Row, Spinner } from 'react-bootstrap';

const BookingSummary = ({ booking, payment, isFormValid, onConfirm, bookingConfirmationCode }) => {
  const checkInDate = moment(booking.checkInDate);
  const checkOutDate = moment(booking.checkOutDate);
  const numberOfDays = checkOutDate.diff(checkInDate, 'days');
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleConfirmBooking = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setIsBookingConfirmed(true);
      onConfirm();
    }, 3000);
  };

  return (
    <Row>
      <Col md={6}></Col>
      <Col md={6}>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title className="hotel-color">Reservation Summary</Card.Title>
            <Card.Text>
              Name: <strong>{booking.guestFullName}</strong>
            </Card.Text>
            <Card.Text>
              Email: <strong>{booking.guestEmail}</strong>
            </Card.Text>
            <Card.Text>
              Check-in Date: <strong>{moment(booking.checkInDate).format('MMM Do YYYY')}</strong>
            </Card.Text>
            <Card.Text>
              Check-out Date: <strong>{moment(booking.checkOutDate).format('MMM Do YYYY')}</strong>
            </Card.Text>
            <Card.Text>
              Number of Days Booked: <strong>{numberOfDays}</strong>
            </Card.Text>
            <Card.Text>
              <h5 className="hotel-color">Number of Guests</h5>
              <strong>
                Adult{booking.numOfAdults > 1 ? 's' : ''} : {booking.numOfAdults}
              </strong>
              <p><strong>Children : {booking.numOfChildren}</strong></p>
            </Card.Text>
            {payment > 0
              ? (
                <React.Fragment>
                  <Card.Text>
                    Total payment: <strong>${payment}</strong>
                  </Card.Text>
                  {isFormValid && !isBookingConfirmed
                    ? (
                      <Button variant="success" onClick={handleConfirmBooking}>
                        {isProcessingPayment
                          ? (
                            <React.Fragment>
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="me-2"
                              />
                            Booking Confirmed, redirecting to payment...
                            </React.Fragment>
                          )
                          : (
                            'Confirm Booking & proceed to payment'
                          )}
                      </Button>
                    )
                    : null}
                  {bookingConfirmationCode && isBookingConfirmed && (
                    <Card.Text>
                      Booking Confirmation Code: <strong>{bookingConfirmationCode}</strong>
                    </Card.Text>
                  )}
                </React.Fragment>
              )
              : (
                <Alert variant="danger">Check-out date must be after check-in date.</Alert>
              )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default BookingSummary;
