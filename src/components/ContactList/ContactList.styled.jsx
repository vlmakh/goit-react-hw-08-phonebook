import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  color: #212121;

  transition: background-color 250ms linear;

  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;
