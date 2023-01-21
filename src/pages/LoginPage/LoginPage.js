// import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { LoginBox, MenuLink } from './LoginPage.styled';
import { Suspense } from 'react';
import { Bars } from 'react-loader-spinner';
import { Login } from 'components/Login/Login';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn && <Navigate to="/contacts" />}

      <LoginBox>
        <Box display="flex" justifyContent="space-around">
          <MenuLink to="/login">Login</MenuLink>
          <MenuLink to="/registration">Registration</MenuLink>
        </Box>
        <Suspense
          fallback={
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              pt="80px"
            >
              <Bars
                height="40"
                width="60"
                color="#ffcc00"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </Box>
          }
        >
          <Login />
        </Suspense>
      </LoginBox>
    </>
  );
}
