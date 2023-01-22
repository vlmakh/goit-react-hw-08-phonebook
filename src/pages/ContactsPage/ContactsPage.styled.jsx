import styled from '@emotion/styled';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

export const ContactPageWrap = styled(Container)`
  max-width: 360px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
`;

export const ControlBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const Contacts = styled.div`
  max-width: 360px;
  margin: 0 auto;
  background-color: #ffffff;
  border-top: 1px solid lightgrey;
`;

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
