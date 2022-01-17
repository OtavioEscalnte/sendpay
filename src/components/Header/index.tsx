import React, { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";
import { Button } from "../Button";
import { Logo } from "../Logo";
import {
  Container,
  NavContainer,
  NavLinks,
  LinkItem,
  ContainerButtons,
  MobileIcon,
} from "./styles";

export function Header() {
  const [active, setActive] = useState(false);

  function handleOpen() {
    setActive(!active);
  }

  return (
    <Container>
      <NavContainer>
        <Logo />

        <NavLinks open={!active}>
          <LinkItem>Sign in</LinkItem>
          <LinkItem>Register</LinkItem>
          <LinkItem>send money</LinkItem>
          <LinkItem>receive money</LinkItem>
          <LinkItem>language</LinkItem>
          <LinkItem>How it Works</LinkItem>
        </NavLinks>

        <ContainerButtons>
          <Button background="#ffffffff" title="Sign in" />
          <Button background="#6c63ff" title="Register" color="#ffffffff" />
        </ContainerButtons>
        <MobileIcon>
          {!active ? (
            <GrMenu size={24} onClick={handleOpen} />
          ) : (
            <GrClose size={24} onClick={handleOpen} />
          )}
        </MobileIcon>
      </NavContainer>
    </Container>
  );
}
