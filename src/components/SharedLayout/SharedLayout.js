import { Outlet } from 'react-router-dom';
import { Header, Container, Footer } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Box } from 'components/Box/Box';
// import logo from 'images/logo.png';
import { Button } from 'components/Button/Button.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Bars } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <Header>
        <Container>
          {isLoggedIn && <UserMenu />}
          {!isLoggedIn && 'Phonebook'}
        </Container>
      </Header>

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
        <Outlet />
      </Suspense>

      <Footer>
        <Container>
          {/* <Button type="button" onClick={toggleModalForm}>
            Add Contact
          </Button> */}
        </Container>
      </Footer>
    </>
  );
};
