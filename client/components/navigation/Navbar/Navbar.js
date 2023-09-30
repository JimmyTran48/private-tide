import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Avatar, Menu, MenuItem } from '@mui/material';

import LoginModal from '../../utils/Modals/LoginModal';
import SignupModal from '../../utils/Modals/SignupModal';
import DetailsModal from '../../utils/Modals/DetailsModal';

import { updateInformation } from '../../../store/slice/teacherSlice';

const Navbar = () => {
  const auth = useSelector((state) => state.teacher.information);

  const [menuAnchor, setMenuAnchor] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const dispatch = useDispatch();

  const menuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const menuClose = () => {
    setMenuAnchor(null);
  };

  const handleLogout = () => {
    dispatch(updateInformation(null));
  };

  const modal = showLogin ? (
    <LoginModal
      close={() => {
        setShowLogin(false);
      }}
    />
  ) : showSignup ? (
    <SignupModal
      close={() => {
        setShowSignup(false);
      }}
    />
  ) : showDetails ? (
    <DetailsModal
      close={() => {
        setShowDetails(false);
      }}
    />
  ) : null;

  const authDiv = auth ? (
    <React.Fragment>
      <Button onClick={menuClick}>
        <Avatar />
      </Button>
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={menuClose}>
        <MenuItem
          onClick={() => {
            setShowDetails(true);
            menuClose();
          }}>
          Teacher Details
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Button
        className='text-white text-sm bg-blue-800 hover:bg-blue-700'
        variant='contained'
        onClick={() => {
          setShowLogin(true);
        }}>
        Log In
      </Button>
      <Button
        className='text-white'
        variant='contained'
        onClick={() => {
          setShowSignup(true);
        }}>
        Sign Up
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {modal}
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
    </React.Fragment>
  );
};

export default Navbar;
