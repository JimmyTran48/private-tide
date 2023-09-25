import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Button, Avatar, Menu, MenuItem } from '@mui/material';

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  const handleLogin = () => {
    setAuth(true);
    setMenuAnchor(null);
    navigate('/home');
  };

  const handleLogout = () => {
    setAuth(false);
    navigate('/');
  };

  const authDiv = auth ? (
    <React.Fragment>
      <Button onClick={handleClick}>
        <Avatar />
      </Button>
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>Teacher Details</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Button
        className='text-white text-sm bg-blue-800 hover:bg-blue-700'
        variant='contained'
        onClick={handleLogin}>
        Log In
      </Button>
      <Button className='text-white' variant='contained'>
        Sign Up
      </Button>
    </React.Fragment>
  );

  return (
    <nav className='bg-blue-600 text-white flex justify-between items-center h-16 px-6'>
      <div>
        <Link to={auth ? '/home' : '/'} className='text-2xl font-bold'>
          Private Tide
        </Link>
      </div>
      {auth && (
        <div>
          <ul className='flex space-x-6'>
            <li>
              <NavLink
                to='/home'
                className={({ isActive }) =>
                  isActive ? 'underline' : 'hover:underline'
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/students'
                className={({ isActive }) =>
                  isActive ? 'underline' : 'hover:underline'
                }>
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/schools'
                className={({ isActive }) =>
                  isActive ? 'underline' : 'hover:underline'
                }>
                Schools
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className='flex space-x-4'>{authDiv}</div>
    </nav>
  );
};

export default Navbar;
