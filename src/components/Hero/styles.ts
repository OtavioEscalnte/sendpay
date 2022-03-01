import styled from "styled-components";
import heroLogo from "../../assets/hero.png";

export const Container = styled.div`
  max-width: 1132px;
  width: 100%;
  margin: 120px auto 0;
  background-image: url(${heroLogo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center right;
  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 20px;
    background-image: none;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  font-size: 2.75rem;
  color: ${({ theme }) => theme.colors.dark};
  max-width: 423px;
  width: 100%;
  @media screen and (max-width: 800px) {
    background-image: none;
  }
  @media screen and (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const BoderDiv = styled.hr`
  width: 53px;
  height: 3px;
  margin-top: 23px;
  border: none;
  background-color: ${({ theme }) => theme.colors.dark_light};
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.colors.text_gray};
  max-width: 381px;
  width: 100%;
  margin-top: 28px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  margin-top: 54px;
`;
