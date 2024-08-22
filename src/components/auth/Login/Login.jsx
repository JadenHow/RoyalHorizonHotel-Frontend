import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import { Button, Container, Form } from 'react-bootstrap';

const Login = ({ onLogin, isLoading, error }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  const redirectUrl = location.state?.path || '/';

  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(login);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(redirectUrl, { replace: true });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoading) {
      setErrorMessage('');
    } else {
      if (error) {
        setErrorMessage(error);
      } else if (error === false) {
        setErrorMessage('');
      } else {
        setErrorMessage('');
      }
    }

    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  }, [error, isLoading]);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <div style={{ padding: '2rem' }}>
        {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="email"
              name="email"
              value={login.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              name="password"
              value={login.password}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button type="submit">
            Login
          </Button>
          <span style={{ marginLeft: '0.75rem' }}>
            Don&apos;t have an account yet? <Link to={'/register'}>Register</Link>
          </span>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
