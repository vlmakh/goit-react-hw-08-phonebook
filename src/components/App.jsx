import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { lazy } from 'react';

const Login = lazy(() => import('components/Login/Login'));
const Registration = lazy(() => import('components/Login/Registration'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Login />} />
          <Route path="/registration" element={<Registration/>} />
        </Route>
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
