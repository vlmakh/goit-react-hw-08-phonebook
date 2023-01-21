import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoginBox = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  text-align: center;
  width: 360px;
  height: 300px;
  border: 1px solid #212121;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  overflow: hidden;
`;

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
    background-color: #fcd535;
  }

  :hover {
    background-color: #ffcc00;
  }
`;
