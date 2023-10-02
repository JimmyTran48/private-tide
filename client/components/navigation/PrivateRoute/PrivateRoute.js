import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authenticated = useSelector((state) => state.teacher.information);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate('/');
    }
  }, [authenticated, navigate]);

  return authenticated ? children : null;
};

export default PrivateRoute;
