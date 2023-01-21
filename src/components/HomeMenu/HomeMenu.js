import { HomeMenuWrap, HomeLink } from './HomeMenu.styled';
import { ButtonLink } from 'components/Button/Button.styled';

export function HomeMenu() {
  return (
    <HomeMenuWrap>
      <HomeLink to="/">Phonebook</HomeLink>
      <ButtonLink to="/login">Login / Register</ButtonLink>
    </HomeMenuWrap>
  );
}
