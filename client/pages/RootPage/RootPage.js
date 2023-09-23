import React from 'react';
import { Outlet } from 'react-router';

import Navbar from '../../components/navigation/Navbar';

const RootPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};


export default RootPage;
