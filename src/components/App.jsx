import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { lazy, Suspense, useEffect } from 'react';
import { checkCurrentUser } from 'redux/operations';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Box } from 'components/Box/Box';
import { Bars } from 'react-loader-spinner';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Login = lazy(() => import('components/Login/Login'));
const Registration = lazy(() => import('components/Registration/Registration'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  // const isCheckingLogin = useSelector(state => state.auth.isCheckingLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense
        fallback={
          <Box pt="100px" display="flex" justifyContent="center">
            <Bars
              height="60"
              width="80"
              color="#ffcc00"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<RestrictedRoute component={<Login />} />} />
            <Route
              path="/registration"
              element={<RestrictedRoute component={<Registration />} />}
            />
          </Route>
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
