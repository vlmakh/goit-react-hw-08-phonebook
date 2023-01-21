import PropTypes from 'prop-types';
import { HiPhone, HiUserAdd } from 'react-icons/hi';
import { MdSave } from 'react-icons/md';
import { Box } from 'components/Box/Box';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
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
              <Field
                type="tel"
                name="number"
                render={({ field }) => (
                  <InputNumber
                    {...field}
                    mask="+99 999 999 9999"
                    placeholder="number"
                  />
                )}
              />
              <ErrorStyled component="div" name="number" />
            </FormField>
          </Box>

          <FormBtn type="submit" aria-label="Formtact">
            <MdSave size="40" />
          </FormBtn>
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
