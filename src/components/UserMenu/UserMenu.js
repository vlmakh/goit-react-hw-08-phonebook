import { UserMenuWrap, Name, Email } from './UserMenu.styled';
import { Button } from 'components/Button/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/operations';
import { Box } from 'components/Box/Box';
import { Filter } from 'components/Filter/Filter';

export function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);
  const userEmail = useSelector(state => state.auth.user.email);
  const isCheckingLogin = useSelector(state => state.auth.isCheckingLogin);

  return (
    <UserMenuWrap>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
      >
        <Box>
          <Name>{userName}</Name>
          <Email>{userEmail}</Email>
        </Box>
        <Button
          type="button"
          onClick={() => dispatch(logout())}
          disabled={isCheckingLogin}
        >
          Logout
        </Button>
      </Box>
      <Filter />
    </UserMenuWrap>
  );
}
