import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  background-color: #ffffff;
  margin-right: 20px;
  padding: 26px;
  border-radius: 15px;
  margin-bottom: 10px;
  transition: 1s ease all;
`;

export const Title = styled.p`
  font-family: "MontSerrat";
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  width: 218px;
  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

export const InfoContainer = styled.div`
  margin: 10px;
`;

export const Name = styled.h3`
  font-family: "MontSerrat";
  font-size: 1.2rem;
  font-weight: 600;
  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const Info = styled.p`
  font-family: "MontSerrat";
  font-size: 1rem;
  font-weight: 600;
  color: #969696;
  margin-top: 5px;
  @media screen and (max-width: 375px) {
    font-size: 0.8rem;
  }
`;
