import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  /* width: 100%; */
  padding: 4px ;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  /* margin: 0 auto; */
  background-color: #fcd535;
  transition: background-color 250ms linear;

  :hover,:focus {
    background-color: #ffcc00;
  }


  :focus-visible {
    outline: none;
  }
`;