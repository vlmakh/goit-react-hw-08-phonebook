import { Box } from 'components/Box/Box';
import { LoginBox, MenuLink } from './RegPage.styled';
import { Registration } from 'components/Registration/Registration';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RegPage() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn && <Navigate to="/contacts" />}

      <LoginBox>
        <Box display="flex" justifyContent="space-around">
          <MenuLink to="/login">Login</MenuLink>
          <MenuLink to="/registration">Registration</MenuLink>
        </Box>

        <Registration />
      </LoginBox>
    </>
  );
}
