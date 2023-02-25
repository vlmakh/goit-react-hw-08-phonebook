import { Box } from 'components/Box/Box';
import { LoginBox } from 'components/LoginBox/LoginBox';
import { MenuLink } from 'components/MenuLink/MenuLink';
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

        <Login />
      </LoginBox>
    </>
  );
}
