import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  height: 24px;
  border-radius: 4px;
  border: none;
  background-color: ${(p: { theme: { colors: { accent: string; }; }; }) => p.theme.colors.accent};
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: ${(p: { theme: { colors: { accentHover: string; }; }; }) => p.theme.colors.accentHover};
  }
`;

export const ButtonLink = styled(NavLink)`
  cursor: pointer;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 4px;
  border: none;
  background-color: ${(p: { theme: { colors: { accent: string; }; }; }) => p.theme.colors.accent};
  transition: background-color 250ms linear;
  text-decoration: none;
  color: #212121;

  :hover,
  :focus {
    background-color: ${(p: { theme: { colors: { accentHover: string; }; }; }) => p.theme.colors.accentHover};
  }
`;
