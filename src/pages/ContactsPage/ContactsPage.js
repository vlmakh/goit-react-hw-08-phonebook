import { Box } from 'components/Box/Box';
import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { filterChange } from 'redux/filter';
import { logout } from 'redux/operations';
import { getContacts } from 'redux/operations';
import { Button } from './ContactsPage.styled';
import { Notification } from 'components/Notification/Notification';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts);
  const userName = useSelector(state => state.auth.user.name);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleFilter = event => {
    dispatch(filterChange(event.currentTarget.value));
  };

  const filteredContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : '';

  return (
    <>
      {!isLoggedIn && <Navigate to="/" />}

      <Box width="320px" mx="auto" position="relative">
        <Box px={2} pb={2} display="flex" justifyContent="space-between">
          <h4>Welcome, {userName}</h4>
          <Button type="button" onClick={() => dispatch(logout())}>
            Logout
          </Button>
        </Box>

        <AddForm />

        <Box
          py={2}
          mt={2}
          border="1px solid #212121"
          borderRadius={3}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.8)"
          backgroundColor="white"
        >
          {filteredContacts.length > 0 || filter ? (
            <Filter value={filter} onChange={handleFilter} />
          ) : (
            <Notification msg="No contacts added" />
          )}

          <ContactList contacts={filteredContacts ?? []} />
        </Box>
      </Box>
    </>
  );
}
