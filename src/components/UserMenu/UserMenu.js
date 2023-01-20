import { UserMenuWrap, Button } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/operations';

export function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);

  return (
    <UserMenuWrap>
      <h4>Welcome, {userName}</h4>
      <Button type="button" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </UserMenuWrap>
  );
}
