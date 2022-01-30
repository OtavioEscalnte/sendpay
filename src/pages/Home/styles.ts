import styled from "styled-components";
import rectangleImg from "../../assets/rectangle.png";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const WorksContainer = styled.div`
  width: 1132px;
  width: 100%;
  margin: 193px auto 0;
  @media screen and (max-width: 375px) {
    margin-top: 100px;
  }
`;

export const TitleWork = styled.h2`
  text-align: center;
  font-family: "MontSerrat";
  font-weight: 600;
  font-size: 2.75rem;

  @media screen and (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const WorkDiv = styled.hr`
  width: 50px;
  height: 3px;
  border: none;
  background-color: #b7b3b3;
  margin: 20px auto 20px;
`;

export const WorkDiscription = styled.p`
  text-align: center;
  margin: 0 auto;
  font-family: "MontSerrat";
  font-size: 1.5rem;
  font-weight: 600;
  color: #969696;
  width: 100%;
  max-width: 587px;
  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const WorkCardsContainer = styled.div`
  width: 1132px;
  width: 100%;
  display: flex;
  margin-top: 80px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  @media screen and (max-width: 375px) {
    margin-top: 50px;
  }
`;

export const RealContainer = styled.div`
  width: 100%;
  height: 580px;
  background-color: #fffcfc;
  padding: 109px 0px;
  margin-top: 165px;

  @media screen and (max-width: 990px) {
    background-color: #ffffff;
  }
  @media screen and (max-width: 375px) {
    margin-top: 70px;
  }
`;
