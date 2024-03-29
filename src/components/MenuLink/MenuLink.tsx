import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  width: 50%;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 700;
  color: #212121;
  border-bottom: 1px solid #212121;
  text-decoration: none;
  transition: background-color 250ms linear;

  &.active {
    background-color: ${(p: { theme: { colors: { accent: string; }; }; }) => p.theme.colors.accent};
  }

  :hover {
    background-color: ${(p: { theme: { colors: { accentHover: string; }; }; }) => p.theme.colors.accentHover};
  }
`;