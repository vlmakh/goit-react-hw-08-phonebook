import styled from '@emotion/styled';

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

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  font-weight: 700;
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
    color: ${p => p.theme.colors.accentHover};
  }
`;
