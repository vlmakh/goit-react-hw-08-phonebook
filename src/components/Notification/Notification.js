import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

export function Notification({ msg }) {
  return <Text>{msg}</Text>;
}

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
