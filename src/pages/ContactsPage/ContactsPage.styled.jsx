import styled from '@emotion/styled';

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

export const Contacts = styled.div`
  max-width: 360px;
  margin: 0 auto;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  border-left: 1px solid #212121;
  border-right: 1px solid #212121;
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
