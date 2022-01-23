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
  font-family: "MontSerrat";
  font-weight: 600;
  font-size: 2.76rem;
  max-width: 423px;
  width: 100%;
  @media screen and(max-width:800px) {
    background-image: none;
  }
`;

export const BoderDiv = styled.hr`
  width: 53px;
  height: 3px;
  margin-top: 23px;
  border: none;
  background-color: #b7b3b3;
`;

export const Description = styled.p`
  font-family: "MontSerrat";
  font-weight: 400;
  color: #000000;
  max-width: 381px;
  width: 100%;
  margin-top: 28px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  margin-top: 54px;
`;
