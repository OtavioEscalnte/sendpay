import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import { Logo } from "../Logo";

import {
  Container,
  ContainerLogo,
  Description,
  ContainerContacts,
  SocialTitle,
  IconContainer,
  TitleIcon,
  ContainerSocialIcon,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <ContainerLogo>
        <Logo />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
          aliquet justo.
        </Description>
      </ContainerLogo>
      <ContainerContacts>
        <SocialTitle>Social Contacts</SocialTitle>
        <ContainerSocialIcon>
          <IconContainer>
            <BsFacebook size={40} color="#1b5bbd" />
            <TitleIcon>Facebook</TitleIcon>
          </IconContainer>
          <IconContainer>
            <BsInstagram size={40} color="#c219b4" />
            <TitleIcon>Instagran</TitleIcon>
          </IconContainer>
          <IconContainer>
            <BsTwitter size={40} color="#339ef7" />
            <TitleIcon>Twitter</TitleIcon>
          </IconContainer>
        </ContainerSocialIcon>
      </ContainerContacts>
    </Container>
  );
}
