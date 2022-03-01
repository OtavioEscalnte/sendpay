import React from "react";
import { useTheme } from "styled-components";

import { Button } from "../Button";

import {
  Container,
  Title,
  BoderDiv,
  Description,
  ContainerButtons,
} from "./styles";

export function Hero() {
  const theme = useTheme();

  return (
    <Container>
      <Title>Sending Money is Easier than before</Title>
      <BoderDiv />

      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        consectetur libero. Curabitur.
      </Description>
      <ContainerButtons>
        <Button
          title="Register"
          fontWeight={500}
          color={theme.colors.light}
          background={theme.colors.background}
          height={50}
          width={146}
        />
        <Button
          title="learn more"
          fontWeight={500}
          background={theme.colors.light}
          height={50}
          width={125}
        />
      </ContainerButtons>
    </Container>
  );
}
