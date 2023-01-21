import { Box } from 'components/Box/Box';
import { Container, Contacts } from './ContactsPage.styled';
import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Button } from 'components/Button/Button.styled';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchContacts } from 'redux/operations';

import { Notification } from 'components/Notification/Notification';
import Modal from 'components/Modal/Modal';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [showModalForm, setShowModalForm] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : '';

  const toggleModalForm = () => {
    setShowModalForm(!showModalForm);
  };

  return (
    <>
      {!isLoggedIn && <Navigate to="/" />}

      <Container>
        <Filter />
      </Container>

      <Contacts>
        {filteredContacts.length > 0 || filter ? (
          <ContactList contacts={filteredContacts ?? []} />
        ) : (
          <Notification msg="No contacts added" />
        )}
      </Contacts>

      <Container>
        <Button type="button" onClick={toggleModalForm}>
          Add Contact
        </Button>
      </Container>

      <Box position="absolute" right="0" top="0">
        {showModalForm && (
          <Modal onClose={toggleModalForm}>
            <AddForm toggleModalForm={toggleModalForm} />
          </Modal>
        )}
      </Box>
    </>
  );
}
