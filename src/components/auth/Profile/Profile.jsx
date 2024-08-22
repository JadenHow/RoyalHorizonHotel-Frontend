import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const Profile = ({ fetchBookingsByUserId, fetchUserById, userById, userIsLoading }) => {
  const [user, setUser] = useState({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    roles: ''
  });

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

  if (userIsLoading) return <div>Loading...</div>;
  return (
    <Container>
      {user
        ? (
          <Card className="p-5 mt-5 mb-5" bg="light">
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
