import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  margin: 0 auto;
  background-color: #fcd535;
  transition: background-color 250ms linear;

  :hover,:focus {
    background-color: #ffcc00;
  }


  :focus-visible {
    outline: none;
  }
`;

export const StyledForm = styled(Form)`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 248px;
`;

export const StyledField = styled(Field)`
  padding: 4px 8px;
  /* border-radius: 4px; */

  /* :hover,:focus {
    border-color: #ffcc00;
  } */

  :focus-visible {
    outline: none;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;
