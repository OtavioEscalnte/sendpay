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
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.dark};
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
  background-color: ${({ theme }) => theme.colors.dark_light};
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.colors.text_gray};
  max-width: 400px;
  width: 100%;
  margin-top: 36px;
  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const TextLink = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.weight.semiBold};
  margin-top: 17px;

  color: ${({ theme }) => theme.colors.background};

  cursor: pointer;

  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;
