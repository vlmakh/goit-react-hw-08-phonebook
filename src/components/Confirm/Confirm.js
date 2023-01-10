import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Formik } from 'formik';
import { FormStyled, FormBtn } from 'components/ContactForm/ContactForm.styled';

export function Confirm({ onFormSubmit, toggleConfirm, name }) {
  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <Formik>
      <FormStyled>
        <p>
          Delete contact <b>{name}</b>?
        </p>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <FormBtn type="button" aria-label="Cancel" onClick={toggleConfirm}>
            Cancel
          </FormBtn>

          <FormBtn
            type="button"
            aria-label="Delete contact"
            onClick={handleSubmit}
          >
            DELETE
          </FormBtn>
        </Box>
      </FormStyled>
    </Formik>
  );
}

Confirm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  toggleConfirm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
