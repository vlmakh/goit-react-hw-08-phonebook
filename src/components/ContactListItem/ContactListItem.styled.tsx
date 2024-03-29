import styled from '@emotion/styled';

export const ContactName = styled.span`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 700;
`;

export const ContactNumber = styled.span`
  margin: 0 4px 0 auto;
  font-size: 14px;
  font-weight: 400;
`;

export const ContactBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #666666;

  transition: color 250ms linear;
`;

export const EditBtn = styled(ContactBtn)`
  :hover {
    color: #212121;
  }
`;

export const DelBtn = styled(ContactBtn)`
  :hover {
    color: red;
  }
`;
