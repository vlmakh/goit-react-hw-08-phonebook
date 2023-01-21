import { HomeBox } from './HomePage.styled';
import phonebook from 'images/phonebook.png';

export const HomePage = () => {
  return (
    <HomeBox>
      <p>
        <b>Please login to watch your contacts</b>
      </p>
      <img width="360" src={phonebook} alt="phonebook" loading="lazy" />
    </HomeBox>
  );
};
