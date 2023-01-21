import { UserMenuWrap, Name, Email } from './UserMenu.styled';
import { Button } from 'components/Button/Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/operations';
import { Box } from 'components/Box/Box';

export function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);
  const userEmail = useSelector(state => state.auth.user.email);

  return (
    <UserMenuWrap>
      <Box>
        <Name>{userName}</Name>
        <Email>{userEmail}</Email>
      </Box>
      <Button type="button" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </UserMenuWrap>
  );
}
