import React from "react";

import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { WorkCard } from "../../components/WorkCard";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

import {
  Container,
  WorksContainer,
  TitleWork,
  WorkDiv,
  WorkDiscription,
  WorkCardsContainer,
  RealContainer,
} from "./styles";
import { Realtime } from "../../components/Realtime";

export function Home() {
  return (
    <Container>
      <Header />
      <Hero />

      <WorksContainer>
        <TitleWork>How it Works</TitleWork>
        <WorkDiv />
        <WorkDiscription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          porttitor.
        </WorkDiscription>
        <WorkCardsContainer>
          <WorkCard
            src={img1}
            cardTitle="In-app transer"
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p"
          />
          <WorkCard
            src={img2}
            cardTitle="In-app transer"
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p"
          />
          <WorkCard
            src={img3}
            cardTitle="In-app transer"
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec p"
          />
        </WorkCardsContainer>
      </WorksContainer>
      <RealContainer>
        <Realtime />
      </RealContainer>
    </Container>
  );
}
