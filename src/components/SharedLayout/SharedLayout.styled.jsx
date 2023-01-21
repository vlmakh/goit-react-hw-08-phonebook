import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  /* padding-top: ${p => p.theme.space[1]}px;
  background-color: ${p => p.theme.colors.bcgMain}; */

  transition: background-color 250ms linear;
`;

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 68px;
  background: #212121;
  color: #ffffff;
  z-index: 1000;
`;

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
`

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
  background: #212121;
  color: #ffffff;
  z-index: 1000;
`;