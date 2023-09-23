import React from 'react';
import { Outlet } from 'react-router';

const RootPage = () => {
  return (
    <React.Fragment>
      <h1>Hello World!</h1>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default RootPage;
