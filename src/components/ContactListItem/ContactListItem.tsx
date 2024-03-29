import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { EditForm } from 'components/EditForm/EditForm';
import { Box } from 'components/Box/Box';
import { deleteContact, updateContact } from 'redux/operations';
import {
  ContactName,
  ContactNumber,
  EditBtn,
  DelBtn,
} from './ContactListItem.styled';
import { Confirm } from 'components/Confirm/Confirm';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { IContact, IValues } from 'components/types';
import { AppDispatch } from 'redux/store';

export function ContactListItem({ id, name, number }: IContact) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const toggleConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteContact({ id, name }));
  };

  const handleUpdate = (updatedContact: IValues) => {
    dispatch(updateContact({ id, ...updatedContact }));
    toggleEditForm();
  };

  return (
    <>
      <Box width="100%" display="flex" alignItems="center" py={3}>
        <BsPersonCircle size="20" color={getRandomHexColor()} />
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </Box>

      <EditBtn type="button" onClick={toggleEditForm} aria-label="Edit contact">
        <MdEdit size="18" />
      </EditBtn>

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
