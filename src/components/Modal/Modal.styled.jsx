import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  padding-top: 8px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
