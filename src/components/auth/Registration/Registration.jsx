import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = ({ onRegister, error, isLoading }) => {
  const [registration, setRegistration] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    onRegister(registration);
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
        setSuccessMessage('Registration success');
        setErrorMessage('');
        setRegistration({ firstName: '', lastName: '', email: '', password: '' });
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
    <Container>
      <div style={{ padding: '2rem' }}>
        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
        {successMessage && <p className="alert alert-success">{successMessage}</p>}
        <h2>Register</h2>
        <Form onSubmit={handleRegistration}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              value={registration.firstName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={registration.lastName}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={registration.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={registration.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button type="submit">
            Register
          </Button>
          <span style={{ marginLeft: '10px' }}>
            Already have an account? <Link to={'/login'}>Login</Link>
          </span>
        </Form>
      </div>
    </Container>
  );
};

export default Registration;
