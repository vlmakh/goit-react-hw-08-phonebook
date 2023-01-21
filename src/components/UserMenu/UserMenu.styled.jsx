import styled from '@emotion/styled';
import { Container } from 'components/Container/Container';

export const UserMenuWrap = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  height: 100%;
`;

export const Name = styled.h4`
  text-transform: capitalize;
  text-align: left;
  font-size: 24px;
`;

export const Email = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: 400;
`;
