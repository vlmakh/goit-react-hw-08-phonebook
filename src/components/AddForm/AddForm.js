import PropTypes from 'prop-types';
import { HiPhone, HiUserAdd } from 'react-icons/hi';
import { MdOutlineDataSaverOn } from 'react-icons/md';
import { Box } from 'components/Box/Box';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import {
  FormStyled,
  FormField,
  InputName,
  InputNumber,
  FormBtn,
  ErrorStyled,
} from 'components/ContactForm/ContactForm.styled';
import { BsPersonCircle } from 'react-icons/bs';
import { getRandomHexColor } from 'utils/getRandomHexColor';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

export function AddForm({ toggleModalForm }) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = (newContact, { resetForm }) => {
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
        <BsPersonCircle size="64" color={getRandomHexColor()} />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={4}
        >
          <Box>
            <FormField>
              <HiUserAdd />
              <InputName type="text" name="name" placeholder="Name" />
              <ErrorStyled component="div" name="name" />
            </FormField>

            <FormField>
              <HiPhone />
              <Field name="number">
                {({ field }) => (
                  <InputNumber
                    {...field}
                    type="tel"
                    mask="+99 999 999 9999"
                    placeholder="number"
                  />
                )}
              </Field>
              <ErrorStyled component="div" name="number" />
            </FormField>
          </Box>

          <FormBtn type="submit" aria-label="Add contact">
            <MdOutlineDataSaverOn size="40" fill="currentColor" />
          </FormBtn>
        </Box>
      </FormStyled>
    </Formik>
  );
}

AddForm.propTypes = {
  toggleModalForm: PropTypes.func.isRequired,
};
