import { Outlet, Navigate } from 'react-router-dom';
import { Box, LoginBox } from 'components/Box/Box';
import { MenuLink } from './HomePage.styled';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Bars } from 'react-loader-spinner';

export const HomePage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn && <Navigate to="/contacts" />}

      <LoginBox>
        <Box display="flex" justifyContent="space-around">
          <MenuLink to="/">Login</MenuLink>
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
          <Outlet />
        </Suspense>
      </LoginBox>
    </>
  );
};
