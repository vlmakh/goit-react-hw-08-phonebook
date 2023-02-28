import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: #212121;

  transition: background-color 250ms linear;

  :hover {
    background-color: ${(p: { theme: { colors: { accent: string; }; }; }) => p.theme.colors.accent};
  }
`;
