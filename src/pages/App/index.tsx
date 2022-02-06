import React from "react";
import { FcHome, FcClock, FcPhoneAndroid, FcInTransit } from "react-icons/fc";

import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { WorkCard } from "../../components/WorkCard";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

import {
  Container,
  WorksContainer,
  Title,
  Divider,
  WorkDiscription,
  WorkCardsContainer,
  RealContainer,
  ServicesContainer,
  ServicesDescription,
  ServiceCardContainer,
} from "./styles";
import { Realtime } from "../../components/Realtime";
import { ServiceCard } from "../../components/ServiceCard";

export function App() {
  return (
    <Container>
      <Header />
      <Hero />

      <WorksContainer>
        <Title>How it Works</Title>
        <Divider />
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
      <ServicesContainer>
        <Title>We are giving Services</Title>
        <Divider />
        <ServicesDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </ServicesDescription>
        <ServiceCardContainer>
          <ServiceCard
            icon={<FcHome size={70} />}
            title="bank Transfer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu."
          />
          <ServiceCard
            icon={<FcClock size={70} />}
            title="Fast Transer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu."
          />
        </ServiceCardContainer>

        <ServiceCardContainer>
          <ServiceCard
            icon={<FcPhoneAndroid size={70} />}
            title="Mobile Recharge"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu."
          />
          <ServiceCard
            icon={<FcInTransit size={70} />}
            title="Easy and Fast"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu."
          />
        </ServiceCardContainer>
      </ServicesContainer>
    </Container>
  );
}
