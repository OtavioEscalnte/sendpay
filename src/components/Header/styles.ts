import styled from "styled-components";

interface IProps {
  open: boolean;
  overflow?: boolean;
}

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1132px;
  width: 100%;
  height: 70px;
  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const NavLinks = styled.ul<IProps>`
  display: flex;
  list-style: none;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    position: absolute;
    padding-top: 10px;
    width: 100%;
    top: 70px;
    background-color: #ffffff;
    left: ${({ open }) => (open ? "-100%" : 0)};
    opacity: 1;
    height: 90vh;
    transition: 0.3s ease-in-out;
  }
`;
export const LinkItem = styled.li`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 1rem;
  margin: 0 20px;

  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    display: none;
  }
  &:nth-child(2) {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    color: #ffffff;
    margin-bottom: 20px;
    text-align: center;
    display: block;
    padding: 10px 0px;
    background-color: #6c63ff;
    &:nth-child(1) {
      display: block;
    }
    &:nth-child(2) {
      display: block;
    }
    &:hover {
      background-color: black;
      transition: 0.5s;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
