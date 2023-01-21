import { HomeMenuWrap } from './HomeMenu.styled';
// import { Button } from 'components/Button/Button.styled';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export function HomeMenu() {
  //   const dispatch = useDispatch();

  return (
    <HomeMenuWrap>
      <NavLink to="/">Phonebook</NavLink>
      <NavLink to="/login">Login / Register</NavLink>
    </HomeMenuWrap>
  );
}
