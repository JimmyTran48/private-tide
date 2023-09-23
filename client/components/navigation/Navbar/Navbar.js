import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button, Avatar, Menu, MenuItem } from '@mui/material';

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  const handleLogin = () => {
    setAuth(true);
    setMenuAnchor(null);
  };

  const handleLogout = () => {
    setAuth(false);
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
        // color='secondary'
        style={{ color: 'white', fontSize: '.875rem' }}
        variant='text'
        onClick={handleLogin}>
        Log In
      </Button>
      <Button color='secondary' variant='contained'>
        Sign Up
      </Button>
    </React.Fragment>
  );

  return (
    <nav className='bg-blue-600 text-white flex justify-around items-center h-16'>
      <div>
        <Link to='/'>Private Tide</Link>
      </div>
      <div>
        <ul className='flex justify-around w-80'>
          <li>
            <NavLink
              to='/home'
              className={({ isActive }) => (isActive ? 'underline' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/students'
              className={({ isActive }) => (isActive ? 'underline' : '')}>
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/schools'
              className={({ isActive }) => (isActive ? 'underline' : '')}>
              Schools
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='flex justify-around w-48'>{authDiv}</div>
    </nav>
  );
};

export default Navbar;
