import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { useTheme } from "styled-components";

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
  const theme = useTheme();

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
            <BsFacebook size={40} color={theme.colors.background_facebook} />
            <TitleIcon>Facebook</TitleIcon>
          </IconContainer>
          <IconContainer>
            <BsInstagram size={40} color={theme.colors.background_instagran} />
            <TitleIcon>Instagran</TitleIcon>
          </IconContainer>
          <IconContainer>
            <BsTwitter size={40} color={theme.colors.background_twitter} />
            <TitleIcon>Twitter</TitleIcon>
          </IconContainer>
        </ContainerSocialIcon>
      </ContainerContacts>
    </Container>
  );
}
