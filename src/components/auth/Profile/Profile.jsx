import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { Alert, Button, Card, Col, Container, Image, Row, Table } from 'react-bootstrap';

const Profile = ({ fetchBookingsByUserId, bookingsByUserId, fetchUserById, userById, deleteUser, bookingIsLoading, bookingError, userIsLoading, userError }) => {
  const [user, setUser] = useState({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    roles: ''
  });

  const [bookings, setBookings] = useState([
    {
      id: '',
      room: { id: '', roomType: '' },
      checkInDate: '',
      checkOutDate: '',
      bookingConfirmationCode: ''
    }
  ]);

  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const id = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchUserById({ id, token });
  }, [id]);

  useEffect(() => {
    if (!userIsLoading) {
      setUser(userById);
    }
  }, [userById]);

  useEffect(() => {
    fetchBookingsByUserId({ id, token });
  }, [id]);

  useEffect(() => {
    if (!bookingIsLoading) {
      setBookings(bookingsByUserId);
    }
  }, [bookingsByUserId]);

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.'
    );

    if (confirmed) {
      await deleteUser(id)
        .then((response) => {
          setMessage(response.data);
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          localStorage.removeItem('userRole');
          navigate('/');
          window.location.reload();
        })
        .catch((error) => {
          setErrorMessage(error.data);
        });
    }
  };

  if (bookingIsLoading || userIsLoading) return <div>Loading...</div>;
  return (
    <Container>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {message && <Alert variant="danger">{message}</Alert>}

      {user
        ? (
          <Card className="p-5 mt-5" bg="light">
            <Card.Title as="h4" className="text-center">User Information</Card.Title>
            <Card.Body>
              <Row className="justify-content-center mb-4">
                <Col md={2} className="d-flex justify-content-center align-items-center">
                  <Image
                    src="https://themindfulaimanifesto.org/wp-content/uploads/2020/09/male-placeholder-image.jpeg"
                    alt="Profile"
                    roundedCircle
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={2} className="fw-bold">ID:</Col>
                <Col md={10}>{user.id}</Col>
              </Row>
              <hr />

              <Row className="mb-3">
                <Col md={2} className="fw-bold">First Name:</Col>
                <Col md={10}>{user.firstName}</Col>
              </Row>
              <hr />

              <Row className="mb-3">
                <Col md={2} className="fw-bold">Last Name:</Col>
                <Col md={10}>{user.lastName}</Col>
              </Row>
              <hr />

              <Row className="mb-3">
                <Col md={2} className="fw-bold">Email:</Col>
                <Col md={10}>{user.email}</Col>
              </Row>
              <hr />

              <Row className="mb-3">
                <Col md={2} className="fw-bold">Role:</Col>
                <Col md={10}>{user.role}</Col>
              </Row>
              <hr />

              <Card.Title as="h4" className="text-center">Booking History</Card.Title>

              {bookings.length > 0
                ? (
                  <Table bordered hover className="shadow">
                    <thead>
                      <tr>
                        <th>Booking ID</th>
                        <th>Room ID</th>
                        <th>Room Type</th>
                        <th>Check In Date</th>
                        <th>Check Out Date</th>
                        <th>Confirmation Code</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking, index) => (
                        <tr key={index}>
                          <td>{booking.id}</td>
                          <td>{booking.room.id}</td>
                          <td>{booking.room.roomType}</td>
                          <td>{moment(booking.checkInDate).subtract(1, 'month').format('MMM Do, YYYY')}</td>
                          <td>{moment(booking.checkOutDate).subtract(1, 'month').format('MMM Do, YYYY')}</td>
                          <td>{booking.bookingConfirmationCode}</td>
                          <td className="text-success">On-going</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )
                : (
                  <p>You have not made any bookings yet.</p>
                )}

              <div className="d-flex justify-content-center">
                <Button variant="danger" size="sm" onClick={handleDeleteAccount}>
                  Close account
                </Button>
              </div>
            </Card.Body>
          </Card>
        )
        : (
          <p>Loading user data...</p>
        )}
    </Container>
  );
};

export default Profile;
