import React from "react";
import { Btn, Title } from "./styles";

interface button {
  title?: string;
  background?: string;
  color?: string;
  fontWeight?: number;
  height?: number;
  width?: number;
}

export function Button({
  title,
  background,
  color,
  fontWeight,
  height,
  width,
}: button) {
  return (
    <Btn backgroundColor={background} width={width}>
      <Title color={color} fontWeight={fontWeight}>
        {title}
      </Title>
    </Btn>
  );
}
