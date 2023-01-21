// import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { LoginBox, MenuLink } from './RegPage.styled';
import { Suspense } from 'react';
import { Bars } from 'react-loader-spinner';
import { Registration } from 'components/Registration/Registration';

export default function RegPage() {
  return (
    <>
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
          <Registration />
        </Suspense>
      </LoginBox>
    </>
  );
}
