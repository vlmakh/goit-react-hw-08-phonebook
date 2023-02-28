import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
import InputMask from 'react-input-mask';

export const FormStyled = styled(Form)`
  text-align: center;
  width: 360px;
  padding: 16px;
  border: 1px solid #212121;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  background-color: white;

  @media screen and (max-width: 360px) {
    width: 100%;
  }
`;

export const FormField = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:first-of-type) {
    margin-top: 16px;
  }
`;

export const InputName = styled(Field)`
  display: flex;
  align-items: center;
  margin-left: 8px;
  padding: 4px;
  font-weight: 700;
  text-transform: capitalize;
  width: 200px;
`;

export const InputNumber = styled(InputMask)`
  display: flex;
  align-items: center;
  margin-left: 8px;
  padding: 4px;
  width: 200px;
`;

export const FormBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 700;

  transition: color 250ms linear, background-color 250ms linear;

  :hover {
    background-color: #ffcc00;
    color: white;
  }
`;

export const ErrorStyled = styled(ErrorMessage)`
  position: absolute;
  bottom: 0;
  transform: translatey(100%);

  font-size: 10px;
  background-color: white;
  color: #212121;
`;
