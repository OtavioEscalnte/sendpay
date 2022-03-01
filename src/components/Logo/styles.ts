import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Brand = styled.img``;
export const LogoTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.background};
  margin-left: 15px;
`;
