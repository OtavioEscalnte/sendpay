import React, { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";
import { useTheme } from "styled-components";

import { Button } from "../Button";
import { Logo } from "../Logo";
import {
  NavContainer,
  NavLinks,
  LinkItem,
  ContainerButtons,
  MobileIcon,
} from "./styles";

export function Header() {
  const theme = useTheme();
  const [active, setActive] = useState(false);

  function handleOpen() {
    setActive(!active);
  }

  return (
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
        <Button background={theme.colors.light} title="Sign in" />
        <Button
          background={theme.colors.background}
          title="Register"
          color={theme.colors.light}
        />
      </ContainerButtons>
      <MobileIcon>
        {!active ? (
          <GrMenu size={24} onClick={handleOpen} />
        ) : (
          <GrClose size={24} onClick={handleOpen} />
        )}
      </MobileIcon>
    </NavContainer>
  );
}
