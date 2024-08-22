import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Alert, Button, InputGroup, Spinner, Form } from 'react-bootstrap';

const FindBooking = ({ cancelBooking, fetchBookingByConfirmationCode, bookingByConfirmationCode, isLoading, error }) => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [bookingInfo, setBookingInfo] = useState({
    id: '',
    bookingConfirmationCode: '',
    room: { id: '', roomType: '' },
    roomNumber: '',
    checkInDate: '',
    checkOutDate: '',
    guestName: '',
    guestEmail: '',
    numOfAdults: '',
    numOfChildren: '',
    totalNumOfGuests: ''
  });

  const emptyBookingInfo = {
    id: '',
    bookingConfirmationCode: '',
    room: { id: '', roomType: '' },
    roomNumber: '',
    checkInDate: '',
    checkOutDate: '',
    guestName: '',
    guestEmail: '',
    numOfAdults: '',
    numOfChildren: '',
    totalNumOfGuests: ''
  };

  const [isDeleted, setIsDeleted] = useState(false);
  const [currentOperation, setCurrentOperation] = useState('');

  const handleInputChange = (event) => {
    setConfirmationCode(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setCurrentOperation('fetch');
    fetchBookingByConfirmationCode({ confirmationCode });
  };

  const handleBookingCancellation = (bookingId) => {
    setCurrentOperation('cancel');
    cancelBooking({ bookingId });
    setIsDeleted(true);
    setBookingInfo(emptyBookingInfo);
    setConfirmationCode('');
  };

  useEffect(() => {
    if (isLoading) {
      setErrorMessage('');
      setSuccessMessage('');
    } else {
      if (error) {
        setSuccessMessage('');
        if (currentOperation === 'fetch') {
          setErrorMessage('No booking found with the provided ID');
        } else if (currentOperation === 'cancel') {
          setErrorMessage(`Error canceling booking: ${error}`);
        }
      } else if (error === false) {
        if (currentOperation === 'cancel') {
          setSuccessMessage('Booking has been cancelled successfully!');
        } else if (currentOperation === 'fetch') {
          setSuccessMessage('Booking fetched successfully!');
        }
      } else {
        setErrorMessage('');
        setSuccessMessage('');
      }
    }

    if (bookingByConfirmationCode && !isLoading && currentOperation === 'fetch') {
      setBookingInfo(bookingByConfirmationCode);
    }

    const timer = setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
      setCurrentOperation('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [error, isLoading, bookingByConfirmationCode, currentOperation]);

  return (
    <React.Fragment>
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center mb-4">Find My Booking</h2>
        <Form onSubmit={handleFormSubmit} className="col-md-6">
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              id="confirmationCode"
              name="confirmationCode"
              value={confirmationCode}
              onChange={handleInputChange}
              placeholder="Enter the booking confirmation code"
            />
            <Button type="submit" className="input-group-text">
              Find booking
            </Button>
          </InputGroup>
        </Form>

        {isLoading
          ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Finding your booking...</span>
            </Spinner>
          )
          : errorMessage
            ? (
              <Alert variant="danger">Error: {errorMessage}</Alert>
            )
            : bookingInfo?.bookingConfirmationCode && (
              <div className="col-md-6 mt-4 mb-5">
                <h3>Booking Information</h3>
                <p className="text-success">Confirmation Code: {bookingInfo?.bookingConfirmationCode}</p>
                <p>Room Number: {bookingInfo?.roomId}</p>
                <p>
                  Check-in Date:{' '}
                  {moment(bookingInfo?.checkInDate).subtract(1, 'month').format('MMM Do, YYYY')}
                </p>
                <p>
                Check-out Date:{' '}
                  {moment(bookingInfo?.checkOutDate).subtract(1, 'month').format('MMM Do, YYYY')}
                </p>
                <p>Full Name: {bookingInfo?.guestFullName}</p>
                <p>Email Address: {bookingInfo?.guestEmail}</p>
                <p>Adults: {bookingInfo?.numOfAdults}</p>
                <p>Children: {bookingInfo?.numOfChildren}</p>
                <p>Total Guest: {bookingInfo?.totalNumOfGuest}</p>

                {!isDeleted && (
                  <Button
                    onClick={() => handleBookingCancellation(bookingInfo?.bookingId)}
                    variant="danger"
                  >
                    Cancel Booking
                  </Button>
                )}
              </div>
            )}

        {successMessage && (
          <Alert variant="success" className="mt-3 fade show">
            {successMessage}
          </Alert>
        )}
      </div>
    </React.Fragment>
  );
};

export default FindBooking;
