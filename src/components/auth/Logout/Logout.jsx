import React from 'react';
import { useAuth } from 'contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Logout = () => {
  const { onLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <React.Fragment>
      <li>
        <Link className="dropdown-item" to={'/profile'}>
          Profile
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <button className="dropdown-item" onClick={handleLogout}>
        Logout
      </button>
    </React.Fragment>
  );
};

export default Logout;
