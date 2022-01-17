import React from "react";
import { Container, Brand, LogoTitle } from "./styles";

import logoImg from "../../assets/logo.svg";

export function Logo() {
  return (
    <Container>
      <Brand src={logoImg} />
      <LogoTitle>Sendpay</LogoTitle>
    </Container>
  );
}
