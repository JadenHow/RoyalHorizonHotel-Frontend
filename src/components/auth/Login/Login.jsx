import React, { useState } from 'react';
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext'; // Assuming this provides necessary auth context

const Login = ({ onLogin }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onLogin(login);

    if (isLoggedIn) {
      navigate(redirectUrl, { replace: true });
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }

    setTimeout(() => {
      setErrorMessage('');
    }, 4000);
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <section className="container col-6 mt-5 mb-5">
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              value={login.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              value={login.password}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-hotel" style={{ marginRight: '0.75rem' }}>
            Login
          </button>
          <span style={{ marginLeft: '0.75rem' }}>
            Don&apos;t have an account yet? <Link to={'/register'}>Register</Link>
          </span>
        </div>
      </form>
    </section>
  );
};

export default Login;
