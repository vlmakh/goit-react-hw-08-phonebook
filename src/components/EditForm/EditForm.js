import PropTypes from 'prop-types';
import { HiPhone, HiUserAdd } from 'react-icons/hi';
import { MdSave } from 'react-icons/md';
import { Box } from 'components/Box/Box';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormStyled,
  Input,
  SaveBtn,
  ErrorStyled,
} from 'components/ContactForm/ContactForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

export function EditForm({ onFormSubmit, nameToUpdate, numberToUpdate }) {
  const updateContact = values => {
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

          <SaveBtn type="submit" aria-label="Save contact">
            <MdSave size="40" />
          </SaveBtn>
        </Box>
      </FormStyled>
    </Formik>
  );
}

EditForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  nameToUpdate: PropTypes.string.isRequired,
  numberToUpdate: PropTypes.string.isRequired,
};
