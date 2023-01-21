import styled from '@emotion/styled';
import { Container } from 'components/Container/Container';
import { NavLink } from 'react-router-dom';

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: #fff;

  transition: color 250ms linear;

  :hover {
    color: #ffcc00;
  }
`;

export const HomeMenuWrap = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  height: 100%;
`;
