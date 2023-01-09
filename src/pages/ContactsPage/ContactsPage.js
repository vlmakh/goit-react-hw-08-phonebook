import { Box } from 'components/Box/Box';
import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from 'redux/operations';
import { getContacts } from 'redux/operations';
import {
  Header,
  Container,
  Contacts,
  Button,
  Footer,
} from './ContactsPage.styled';
// import { Notification } from 'components/Notification/Notification';
import Modal from 'components/Modal/Modal';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts);
  const userName = useSelector(state => state.auth.user.name);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [showModalForm, setShowModalForm] = useState(false);

  useEffect(() => {
    dispatch(getContacts());
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

      <Header>
        <Container>
          <Box
            px={2}
            py={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <h4>Welcome, {userName}</h4>
            <Button type="button" onClick={() => dispatch(logout())}>
              Logout
            </Button>
          </Box>
          <Filter />
        </Container>
      </Header>

      <Contacts>
        <Box
          // border="1px solid #212121"
          // boxShadow="0px 4px 8px rgba(0, 0, 0, 0.8)"
          backgroundColor="white"
        >
          {/* {filteredContacts.length > 0 || filter ? (
            <Filter />
          ) : (
            <Notification msg="No contacts added" />
          )} */}

          <ContactList contacts={filteredContacts ?? []} />
        </Box>
      </Contacts>

      <Footer>
        <Container>
          <Button type="button" onClick={toggleModalForm}>
            Add Contact
          </Button>
        </Container>
      </Footer>

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
