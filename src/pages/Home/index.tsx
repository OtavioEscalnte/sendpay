import React from "react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Container, HeroContent } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <HeroContent>
        <Hero />
      </HeroContent>
    </Container>
  );
}
