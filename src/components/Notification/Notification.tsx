import { Text } from './Notification.styled';
import { INotification } from 'components/types';

export function Notification({ msg }: INotification) {
  return <Text>{msg}</Text>;
}
