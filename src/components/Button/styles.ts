import styled from "styled-components";

interface buttonProps {
  backgroundColor?: string;
  color?: string;
  fontWeight?: number;
  height?: number;
  width?: number;
}

export const Btn = styled.div<buttonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : 106)}px;
  height: ${({ height }) => (height ? height : 40)}px;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.light};
  border: 2px solid ${({ theme }) => theme.colors.dark_light};

  cursor: pointer;
  &:active {
    margin-top: -2px;
  }
  &:nth-child(1) {
    margin-right: 15px;
  }
`;

export const Title = styled.h4<buttonProps>`
  color: ${({ color, theme }) => (color ? color : theme.colors.dark)};
  font-family: "Montserrat";
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ? fontWeight : theme.weight.bold};
  font-size: 1rem;
`;
