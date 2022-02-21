import styled from "styled-components";

export const Container = styled.div`
  max-width: 1132px;
  width: 100%;
  margin: 0px auto 0px;
  padding: 80px 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 80px 24px;
  }
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

export const ContainerLogo = styled.div`
  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Description = styled.p`
  font-family: "MontSerrat";
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 30px;
  max-width: 317px;
  width: 100%;
  @media screen and (max-width: 990px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const ContainerContacts = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 990px) {
    padding: 80px 24px;
  }
`;

export const SocialTitle = styled.h3`
  font-family: "MontSerrat";
  font-weight: 800;
  font-size: 1.3rem;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export const ContainerSocialIcon = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const TitleIcon = styled.p`
  font-family: "MontSerrat";
  font-weight: 500;
  font-size: 1.3rem;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;
