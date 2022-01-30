import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 30px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const CardTitle = styled.h3`
  margin: 56px 0 11px;
  font-family: "MontSerrat";
  font-weight: 600;
  font-size: 1.6rem;

  @media screen and (max-width: 375px) {
    font-size: 1.4rem;
  }
`;

export const CardDescription = styled.p`
  font-family: "MontSerrat";
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
  color: #969696;
  max-width: 337px;
  width: 100%;
`;
