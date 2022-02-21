import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface Props {
  display?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: ${({ display }) => (display ? "column" : "row")};
  justify-content: space-between;
  max-width: 1132px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

export const SeeAll = styled.div<Props>`
  max-width: 152px;
  width: 100%;
  display: ${({ display }) => (display ? "none" : "block")};
  overflow-y: hidden;
  transition: 0.5s ease-in all;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    flex-direction: column;
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-family: "MontSerrat";
  font-size: 2rem;
  font-style: italic;
  font-weight: lighter;
  color: #ffffff;
  @media screen and (max-width: 375px) {
    font-size: 1.8rem;
  }
`;

export const Divider = styled.hr`
  width: 50px;
  height: 2px;
  border: none;
  background-color: #ffffff;
  margin: 20px 0px;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    margin: 20px auto;
  }
`;

export const ContentIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SubTitle = styled.p`
  font-family: "MontSerrat";
  font-size: 1.3rem;
  font-weight: 400;
  color: #ffffff;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    font-size: 1.6rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  background-color: #ffffff;
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;

export const ArrowLeftContainer = styled.div<Props>`
  display: ${({ display }) => (display ? "none" : "block")};
  cursor: pointer;
  margin: 0px 0px 20px 50px;
`;

export const ArrowLeft = styled(AiOutlineArrowLeft)`
  color: #fff;
  font-size: 2.2rem;
  transition: 0.3s;
  animation: spin 0.5s infinite alternate linear;
  animation-play-state: running;

  &:hover {
    animation-play-state: paused;
  }
`;

export const ContainerSayingCard = styled.div<Props>`
  display: flex;
  margin-right: ${({ display }) => (display ? 0 : -500)}px;
  margin-left: 50px;

  /*

  ::-webkit-scrollbar {
    background-color: "tranparent";
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
    border-radius: 10px;
  }
  */
`;
