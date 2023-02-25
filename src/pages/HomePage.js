import { HomeBox } from 'components/HomeBox/HomeBox';
import phonebook from 'images/phonebook.png';

export const HomePage = () => {
  return (
    <HomeBox>
      <p>
        <b>Please login to watch your contacts</b>
      </p>
      <img
        width="360"
        height="360"
        src={phonebook}
        alt="phonebook"
        loading="lazy"
      />
    </HomeBox>
  );
};
