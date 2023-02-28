import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Item } from './ContactList.styled';
import {IContactList} from 'components/types'

export function ContactList({ contacts }: IContactList) {
  return (
    <ul>
      {contacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <Item key={id}>
            <ContactListItem id={id} name={name} number={number} />
          </Item>
        ))}
    </ul>
  );
}
