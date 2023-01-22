import { ContactPageWrap, ControlBox, Contacts } from './ContactsPage.styled';
import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
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
  const contacts = useSelector(state => state.contacts.items);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoading = useSelector(state => state.contacts.isLoading);
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
    <ContactPageWrap>
      {!isLoggedIn && <Navigate to="/login" />}

      <ControlBox>
        {isLoading ? (
          <Notification msg={isLoading} />
        ) : (
          <Button type="button" onClick={toggleModalForm}>
            Add New
          </Button>
        )}
      </ControlBox>

      <Contacts>
        {!isLoading && !filteredContacts.length && (
          <Notification msg="No contacts found" />
        )}

        {filteredContacts.length > 0 && (
          <ContactList contacts={filteredContacts ?? []} />
        )}
      </Contacts>

      {showModalForm && (
        <Modal onClose={toggleModalForm}>
          <AddForm toggleModalForm={toggleModalForm} />
        </Modal>
      )}
    </ContactPageWrap>
  );
}
