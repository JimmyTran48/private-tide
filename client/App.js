import React from 'react';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import RootPage from './pages/RootPage';
import SchoolsPage from './pages/SchoolsPage';
import StudentsPage from './pages/StudentsPage';
import UserHomePage from './pages/UserHomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootPage />}>
      {/* Public Routes */}
      <Route exact path='/' element={<HomePage />} />

      {/* Authenticated Routes */}
      <Route path='/home' element={<UserHomePage />} />
      <Route path='/students' element={<StudentsPage />} />
      <Route path='/schools' element={<SchoolsPage />} />

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
