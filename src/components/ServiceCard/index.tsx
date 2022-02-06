import React from "react";
import { IconType } from "react-icons";

import { Container, ContentContainer, Title, Description } from "./styles";

interface Props {
  icon?: IconType | any;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: Props) {
  return (
    <Container>
      {icon}
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentContainer>
    </Container>
  );
}
