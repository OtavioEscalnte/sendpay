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
`;

export const Image = styled.img`
  width: 207px;
  height: 207px;
`;

export const CardTitle = styled.h3`
  margin: 56px 0 11px;
  font-family: "MontSerrat";
  font-weight: 600;
  font-size: 1.6rem;
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
