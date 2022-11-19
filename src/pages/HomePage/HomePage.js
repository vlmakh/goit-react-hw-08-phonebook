import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { MenuLink } from './HomePage.styled';
import { Suspense } from 'react';

export const HomePage = () => {
  return (
    <Box
      textAlign="center"
      mx="auto"
      width="320px"
      height="300px"
      border="1px solid #212121"
      borderRadius="8px"
      backgroundColor="white"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.8)"
      overflow="hidden"
    >
      <Box display="flex" justifyContent="space-around">
        <MenuLink to="/">Login</MenuLink>
        <MenuLink to="/registration">Registration</MenuLink>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
