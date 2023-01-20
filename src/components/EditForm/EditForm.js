import PropTypes from 'prop-types';
import { HiPhone, HiUserAdd } from 'react-icons/hi';
import { MdSave } from 'react-icons/md';
import { Box } from 'components/Box/Box';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import {
  FormStyled,
  FormField,
  Input,
  FormBtn,
  ErrorStyled,
} from 'components/ContactForm/ContactForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required(),
});

export function EditForm({ onFormSubmit, nameToUpdate, numberToUpdate }) {
  const updateContact = values => {
    console.log(values);
    onFormSubmit(values);
  };

  return (
    <Formik
      onSubmit={updateContact}
      initialValues={{
        name: nameToUpdate,
        number: numberToUpdate,
      }}
      validationSchema={schema}
    >
      <FormStyled>
        <Box>
          <FormField>
            <HiUserAdd />
            <Input type="text" name="name" placeholder="Name" />
            <ErrorStyled component="div" name="name" />
          </FormField>

          <FormField>
            <HiPhone />
            <Input type="tel" name="number" placeholder="number" />
            <ErrorStyled component="div" name="number" />
          </FormField>
        </Box>

        <FormBtn type="submit" aria-label="Formtact">
          <MdSave size="40" />
        </FormBtn>
      </FormStyled>
    </Formik>
  );
}

EditForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  nameToUpdate: PropTypes.string.isRequired,
  numberToUpdate: PropTypes.string.isRequired,
};
