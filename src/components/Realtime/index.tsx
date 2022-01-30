import React from "react";
import {
  Container,
  Description,
  PersonContainer,
  Person,
  RealContent,
  RealDiv,
  TextLink,
  Title,
} from "./styles";

import personImg from "../../assets/person.png";

export function Realtime() {
  return (
    <Container>
      <PersonContainer>
        <Person src={personImg} />
      </PersonContainer>
      <RealContent>
        <Title>Real-time Currency balance check</Title>
        <RealDiv />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed.
        </Description>
        <TextLink>Ream More</TextLink>
      </RealContent>
    </Container>
  );
}
