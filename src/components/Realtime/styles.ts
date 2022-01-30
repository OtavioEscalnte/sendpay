import styled from "styled-components";

export const Container = styled.div`
  max-width: 1132px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

export const PersonContainer = styled.div``;

export const Person = styled.img`
  max-width: 100%;
  height: auto;
`;

export const RealContent = styled.div`
  margin-top: 50px;
`;

export const Title = styled.h3`
  font-family: "MontSerrat";
  font-size: 2.5rem;
  font-weight: 600;
  max-width: 423px;
  width: 100%;
  @media screen and (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const RealDiv = styled.hr`
  width: 53px;
  height: 3px;
  margin-top: 23px;
  border: none;
  background-color: #b7b3b3;
`;

export const Description = styled.p`
  font-family: "MontSerrat";
  font-size: 1.2rem;
  font-weight: 400;
  color: #969696;
  max-width: 400px;
  width: 100%;
  margin-top: 36px;
  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const TextLink = styled.p`
  font-family: "MontSerrat";
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 17px;

  color: #6c63ff;

  cursor: pointer;

  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;
