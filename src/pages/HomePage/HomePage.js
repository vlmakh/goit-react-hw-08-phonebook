import { Outlet, Navigate } from 'react-router-dom';
import { Box, LoginBox } from 'components/Box/Box';
import { MenuLink } from './HomePage.styled';
// import { Suspense } from 'react';
import { useSelector } from 'react-redux';

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
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
      </LoginBox>
    </>
  );
};
