import React from "react";
import { Btn, Title } from "./styles";

interface button {
  title?: string;
  background?: string;
  color?: string;
}

export function Button({ title, background, color }: button) {
  return (
    <Btn backgroundColor={background}>
      <Title color={color}>{title}</Title>
    </Btn>
  );
}
