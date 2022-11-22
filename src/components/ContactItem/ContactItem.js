import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { MdDeleteForever } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
// import {useDeleteContactMutation,
// useUpdateContactMutation}  from 'services/api';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { EditForm } from 'components/EditForm/EditForm';
import { Box } from 'components/Box/Box';
import { deleteContact, updateContact } from 'redux/operations';

export function ContactItem({ id, name, number, contacts }) {
  // const [deleteContact, { isLoading }] = useDeleteContactMutation();
  // const [updateContact] = useUpdateContactMutation();
  const [showEditForm, setShowEditForm] = useState(false);
  const dispatch = useDispatch();

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const handleDelete = contactId => {
    if (global.confirm('Delete contact?')) {
      dispatch(deleteContact(contactId));
    }
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
      <Box width="100%" display="flex" onClick={toggleEditForm}>
        <BsPersonCircle size="18" color={getRandomHexColor()} />
        <span className={css.contactName}>{name}</span>
        <span className={css.contactNumber}>{number}</span>
      </Box>

      <button
        type="button"
        className={css.delButton}
        onClick={() => handleDelete(id)}
        aria-label="Delete contact"
        // disabled={isLoading}
      >
        <MdDeleteForever size="18" />
      </button>

      <Box position="absolute" right="0" top="0">
        {showEditForm && (
          <Modal onClose={toggleEditForm}>
            <EditForm
              onFormSubmit={handleUpdate}
              nameToUpdate={name}
              numberToUpdate={number}
            />
          </Modal>
        )}
      </Box>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  contacts: PropTypes.array,
};
