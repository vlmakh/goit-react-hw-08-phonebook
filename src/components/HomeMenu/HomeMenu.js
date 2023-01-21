import { HomeMenuWrap } from './HomeMenu.styled';
import { Button } from 'components/Button/Button.styled';
// import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function HomeMenu() {
  //   const dispatch = useDispatch();

  return (
    <HomeMenuWrap>
      <h4>Phonebook</h4>
      <Button
        type="button"
        onClick={() => {
          <Navigate to="/login" />;
        }}
      >
        Login / Register
      </Button>
    </HomeMenuWrap>
  );
}
