import PropTypes from 'prop-types';
// import { MdSave } from 'react-icons/md';
import { Box } from 'components/Box/Box';
import { FormConfirm, ConfirmBtn } from './Confirm.styled';

export function Confirm({ onFormSubmit, toggleConfirm, name }) {
  const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <FormConfirm>
      <p>
        Delete contact <b>{name}</b>?
      </p>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <ConfirmBtn type="button" aria-label="Cancel" onClick={toggleConfirm}>
          Cancel
        </ConfirmBtn>

        <ConfirmBtn
          type="submit"
          aria-label="Delete contact"
          onClick={handleSubmit}
        >
          DELETE
        </ConfirmBtn>
      </Box>
    </FormConfirm>
  );
}

Confirm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  toggleConfirm: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
