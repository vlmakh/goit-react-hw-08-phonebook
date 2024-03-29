import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { lazy, Suspense, useEffect } from 'react';
import { checkCurrentUser } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { LoaderBox } from './LoaderBox/LoaderBox';
import { Bars } from 'react-loader-spinner';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Toaster } from 'react-hot-toast';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'utils/theme';
import { AppDispatch } from 'redux/store';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegPage = lazy(() => import('pages/RegPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Suspense
        fallback={
          <LoaderBox>
            <Bars
              height="60"
              width="80"
              color="#ffcc00"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </LoaderBox>
        }
      >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<RestrictedRoute component={<HomePage />} />} />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
              />
              <Route
                path="/registration"
                element={<RestrictedRoute component={<RegPage />} />}
              />  
            
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      <Toaster
        toastOptions={{
          duration: 2500,
          style: {
            fontWeight: '700',
            background: '#fff',
            color: '#212121',
          },
        }}
      />
    </ThemeProvider>
  );
};
