import React from "react";
import { Button } from "../Button";
import {
  Container,
  Title,
  BoderDiv,
  Description,
  ContainerButtons,
} from "./styles";

export function Hero() {
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
          color="#ffffff"
          background="#6C63FF"
          height={50}
          width={146}
        />
        <Button
          title="learn more"
          fontWeight={500}
          background="#FFFFFF"
          height={50}
          width={125}
        />
      </ContainerButtons>
    </Container>
  );
}
