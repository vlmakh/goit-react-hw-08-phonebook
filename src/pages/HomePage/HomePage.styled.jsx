import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  width: 50%;
  padding: 16px 0;
  /* text-align: center; */
  /* margin-right: 16px; */
  font-size: 16px;
  font-weight: 700;
  color: #212121;
  border-bottom: 1px solid #212121;
  text-decoration: none;

  &.active {
    background-color: grey;
  }
`;
