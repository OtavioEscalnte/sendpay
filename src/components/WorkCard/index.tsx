import React from "react";
import { Container, Image, CardTitle, CardDescription } from "./styles";

interface IProps {
  src?: string;
  cardTitle: string;
  cardDescription: string;
}

export function WorkCard({ src, cardTitle, cardDescription }: IProps) {
  return (
    <Container>
      <Image src={src} />

      <CardTitle>{cardTitle}</CardTitle>
      <CardDescription>{cardDescription}</CardDescription>
    </Container>
  );
}
