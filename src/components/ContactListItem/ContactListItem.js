import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { EditForm } from 'components/EditForm/EditForm';
import { Box } from 'components/Box/Box';
import { deleteContact, updateContact } from 'redux/operations';
import { ContactName, ContactNumber, DelBtn } from './ContactListItem.styled';
import { Confirm } from 'components/Confirm/Confirm';

export function ContactListItem({ id, name, number }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useDispatch();

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const toggleConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleUpdate = updatedContact => {
    dispatch(updateContact({ id, ...updatedContact }));
    toggleEditForm();
  };

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  return (
    <>
      <Box
        width="100%"
        display="flex"
        onClick={toggleEditForm}
        alignItems="center"
        p={2}
      >
        <BsPersonCircle size="20" color={getRandomHexColor()} />
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </Box>

      <DelBtn
        type="button"
        onClick={() => setShowConfirm(true)}
        aria-label="Delete contact"
      >
        <MdDeleteForever size="18" />
      </DelBtn>

      {showEditForm && (
        <Modal onClose={toggleEditForm}>
          <EditForm
            onFormSubmit={handleUpdate}
            nameToUpdate={name}
            numberToUpdate={number}
          />
        </Modal>
      )}

      {showConfirm && (
        <Modal onClose={toggleConfirm}>
          <Confirm
            onFormSubmit={() => handleDelete(id)}
            toggleConfirm={toggleConfirm}
            name={name}
          />
        </Modal>
      )}
    </>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
