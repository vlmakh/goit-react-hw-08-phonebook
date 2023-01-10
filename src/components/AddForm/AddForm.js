import { HiPhone, HiUserAdd } from 'react-icons/hi';
import { MdOutlineDataSaverOn } from 'react-icons/md';
import { Box } from 'components/Box/Box';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import {
  FormStyled,
  Input,
  FormBtn,
  ErrorStyled,
} from 'components/ContactForm/ContactForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export function AddForm({ toggleModalForm }) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = async (newContact, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(` ${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    resetForm();
    toggleModalForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
    >
      <FormStyled>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Box display="flex" alignItems="center" position="relative">
              <HiUserAdd />
              <Input type="text" name="name" placeholder="Name" />
              <ErrorStyled component="div" name="name" />
            </Box>

            <Box display="flex" alignItems="center" mt={3} position="relative">
              <HiPhone />
              <Input type="tel" name="number" placeholder="number" />
              <ErrorStyled component="div" name="number" />
            </Box>
          </Box>

          <FormBtn type="submit" aria-label="Add contact">
            <MdOutlineDataSaverOn size="40" fill="currentColor" />
          </FormBtn>
        </Box>
      </FormStyled>
    </Formik>
  );
}
