import styled from "styled-components";
import rectangleImg from "../../assets/rectangle.png";
import circleImg from "../../assets/circle.png";

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

export const Title = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  font-size: 2.75rem;

  @media screen and (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const Divider = styled.hr`
  width: 50px;
  height: 3px;
  border: none;
  background-color: ${({ theme }) => theme.colors.dark_light};
  margin: 20px auto 20px;
`;

export const WorkDiscription = styled.p`
  text-align: center;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.text_gray};
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
  background-color: ${({ theme }) => theme.colors.background_secundary};
  padding: 109px 0px;
  margin-top: 165px;

  @media screen and (max-width: 990px) {
    background-color: ${({ theme }) => theme.colors.light};
  }
  @media screen and (max-width: 375px) {
    margin-top: 70px;
  }
`;

export const ServicesContainer = styled.div`
  max-width: 1132px;
  width: 100%;
  margin: 0 auto;
  background-image: url(${rectangleImg});
  background-size: 1100px 850px;
  background-repeat: no-repeat;
  background-position: center top;
  padding: 100px 0px 200px;
  @media screen and (max-width: 990px) {
    margin-top: 200px;
    padding: 0 20px;
  }
  @media screen and (max-width: 800px) {
    background-image: none;
  }
`;

export const ServicesDescription = styled.p`
  text-align: center;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.text_gray};
  max-width: 587px;
  width: 100%;
  @media screen and (max-width: 375px) {
    font-size: 0.9rem;
  }
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const AboutUsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 440px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${circleImg});
  background-repeat: no-repeat;
  background-position: center top;
  @media screen and (max-width: 990px) {
    margin-top: 40px;
  }
`;
