import React from "react";
import {
  Container,
  Title,
  ContentUser,
  Image,
  InfoContainer,
  Name,
  Info,
} from "./styles";

interface Props {
  src: string;
}

export function SayingCard({ src }: Props) {
  return (
    <Container>
      <Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet
        justo. Nulla varius vitae.
      </Title>
      <ContentUser>
        <Image src={src} />
        <InfoContainer>
          <Name>Dev opter</Name>
          <Info>Designer</Info>
        </InfoContainer>
      </ContentUser>
    </Container>
  );
}
