import { Box } from 'components/Box/Box';
import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterChange } from 'redux/store';
import { useGetContactsQuery, useAddContactMutation } from 'services/api';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleAdd = async (newContact, resetForm) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(` ${newContact.name} is already in contacts.`);
      return;
    }
    try {
      await addContact(newContact);
    } catch (error) {
      alert(error);
    } finally {
      resetForm();
    }
  };

  const handleFilter = event => {
    dispatch(filterChange(event.currentTarget.value));
  };

  const filteredContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : '';

  return (
    <Box width="320px" mx="auto" position="relative">
      <Box px={2} pb={2} display="flex" justifyContent="space-between">
        <h4>Welcome, User</h4>
        <Link to="/">Logout</Link>
      </Box>

      <AddForm onFormSubmit={handleAdd} />

      <Box
        py={2}
        mt={2}
        border="1px solid #212121"
        borderRadius={3}
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.8)"
        backgroundColor="white"
      >
        <Filter value={filter} onChange={handleFilter} />

        {error && (
          <p>Sorry, there is some error. Please try to reload page...</p>
        )}

        {isLoading ? (
          'Loading...'
        ) : (
          <ContactList contacts={filteredContacts ?? []} />
        )}
      </Box>
    </Box>
  );
}
