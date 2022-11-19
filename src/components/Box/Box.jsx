import styled from '@emotion/styled';
import {
  layout,
  space,
  color,
  border,
  flexbox,
  position,
  shadow,
} from 'styled-system';

export const Box = styled('div')(
  layout,
  space,
  color,
  border,
  flexbox,
  position,
  shadow
);

export const LoginBox = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  text-align: center;
  width: 320px;
  height: 300px;
  border: 1px solid #212121;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  overflow: hidden;
`;
