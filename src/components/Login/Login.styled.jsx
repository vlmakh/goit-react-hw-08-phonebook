import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  padding: 4px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  margin: 0 auto;

  :hover {
    background-color: grey;
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
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;
