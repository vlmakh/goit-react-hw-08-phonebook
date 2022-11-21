import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { lazy, useEffect } from 'react';
import { checkCurrentUser } from 'redux/operations'
import { useDispatch } from 'react-redux';
// import Login from 'components/Login/Login';
// import Registration from 'components/Login/Registration';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

const Login = lazy(() => import('components/Login/Login'));
const Registration = lazy(() => import('components/Login/Registration'));
// const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkCurrentUser())
  }, [dispatch])


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
