import styled from '@emotion/styled';
import { Container } from 'components/Container/Container';

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 84px;
  background: #212121;
  color: #ffffff;
  z-index: 1000;
`;

export const FooterWrap = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 8px;
  height: 100%;
`;

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background: #212121;
  color: #ffffff;
  z-index: 1000;
`;

export const FooterLink = styled.a`
  font-weight: 700;
  color: white;
  text-decoration: none;

  transition: color 250ms linear;

  :hover,
  :focus {
    color: ${(p: { theme: { colors: { accentHover: string; }; }; }) => p.theme.colors.accentHover};
  }
`;
