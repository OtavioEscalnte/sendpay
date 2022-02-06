import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  @media screen and (max-width: 990px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  margin-left: 16px;
  @media screen and (max-width: 990px) {
    text-align: center;
    margin-top: 20px;
    margin-left: 0;
  }
`;

export const Title = styled.h3`
  font-family: "MontSerrat";
  font-size: 1.8rem;
  font-weight: 600;
  @media screen and (max-width: 375px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  font-family: "MontSerrat";
  font-size: 1.1rem;
  font-weight: 600;
  color: #b7b3b3;
  margin-top: 20px;
  max-width: 403px;
  width: 100%;
  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;
