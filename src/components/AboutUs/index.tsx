import React, { useState } from "react";

import { SayingCard } from "../SayingCard";

import user1Img from "../../assets/user1.jpg";
import user2Img from "../../assets/user2.jpg";
import user3Img from "../../assets/user3.jpg";

import {
  Container,
  SeeAll,
  Title,
  Divider,
  ContentIcon,
  SubTitle,
  Icon,
  ArrowLeft,
  ContainerSayingCard,
  ArrowLeftContainer,
} from "./styles";

export function AboutUs() {
  const [isHidden, setIsHidden] = useState(false);

  function handleHidde() {
    setIsHidden(!isHidden);
  }

  return (
    <Container display={isHidden ? true : false}>
      <SeeAll display={isHidden ? true : false} onClick={handleHidde}>
        <Title>People Are Saying About Us</Title>
        <Divider />
        <ContentIcon>
          <SubTitle>See all </SubTitle>
          <Icon>{">"}</Icon>
        </ContentIcon>
      </SeeAll>
      <ArrowLeftContainer
        display={isHidden ? false : true}
        onClick={handleHidde}
      >
        <ArrowLeft />
      </ArrowLeftContainer>
      <ContainerSayingCard>
        <SayingCard src={user1Img} />
        <SayingCard src={user2Img} />
        <SayingCard src={user3Img} />
        <SayingCard src={user3Img} />
      </ContainerSayingCard>
    </Container>
  );
}
