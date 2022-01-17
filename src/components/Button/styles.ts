import styled from "styled-components";

interface buttonProps {
  backgroundColor?: string;
  color?: string;
}

export const Btn = styled.div<buttonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 106px;
  height: 40px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#ffffff"};
  border: 2px solid #b7b3b3;
  cursor: pointer;
  &:active {
    margin-top: -2px;
  }
  &:nth-child(1) {
    margin-right: 15px;
  }
`;

export const Title = styled.h4<buttonProps>`
  color: ${({ color }) => (color ? color : "#000000")};
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 1rem;
`;
