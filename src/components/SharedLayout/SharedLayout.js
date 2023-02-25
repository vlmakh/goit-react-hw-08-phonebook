import { Outlet } from 'react-router-dom';
import { Header, Footer, FooterWrap, FooterLink } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Box } from 'components/Box/Box';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HomeMenu } from 'components/HomeMenu/HomeMenu';
import { Bars } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { Logo } from 'components/Logo/Logo';
import { selectIsLoogedIn } from 'redux/selectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoogedIn);

  return (
    <>
      <Header>
        {isLoggedIn && <UserMenu />}
        {!isLoggedIn && <HomeMenu />}
      </Header>

      <Suspense
        fallback={
          <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
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
        <FooterWrap>
          <FooterLink
            href="https://vlmakh.github.io/my-portfolio/"
            target="blank"
          >
            <Logo />
          </FooterLink>
          <p>2023</p>
          <FooterLink href="mailto:vlmakh@gmail.com">
            vlmakh@gmail.com
          </FooterLink>
        </FooterWrap>
      </Footer>
    </>
  );
};
