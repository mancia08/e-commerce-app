import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";
import Text from "../../subatoms/text/Text";
import Hr from "../../subatoms/hr/Hr";
import Logo from "../../subatoms/logo/Logo";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const StyledFooter = styled.div`
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: ${theme.viewport.tablet}) {
    height: 35vw;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
`;

const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${theme.sizes.buttons.M};
  padding-top: calc(${theme.sizes.buttons.M} / 2);
  @media (min-width: ${theme.viewport.tablet}) {
    flex-direction: row;
    padding-top: calc(${theme.sizes.buttons.M} / 4);
    margin-bottom: calc(${theme.sizes.buttons.M} / 2);
  }
`;

const StyledFooterColumn = styled.div`
  width: 40vw;
  :nth-child(2) {
    align-self: flex-end;
  }
`;
const GithubIcon = styled(FaGithub)`
  width: 50px;
  height: 50px;
`;
const LinkedinIcon = styled(FaLinkedin)`
  width: 50px;
  height: 50px;
`;
const InfoIcon = styled(FaInfoCircle)`
  width: 50px;
  height: 50px;
`;
const Footer = () => (
  <>
    <Hr type="footer" />
    <StyledFooter>
      <Logo type="footer" />
      <FooterTextContainer>
        <StyledFooterColumn>
          <GithubIcon />

          <Text color="dark" size="M" align="center" text="GitHub" />
          <a href="https://github.com/gabriellji" target="_blank">
            <Text
              color="dark"
              size="S"
              align="center"
              text="Habrykava Yauheniya"
            />
          </a>
          <a href="https://github.com/JacopoLuri" target="_blank">
            <Text color="dark" size="S" align="center" text="Luri Jacopo" />
          </a>
          <a href="https://github.com/mancia08" target="_blank">
            <Text color="dark" size="S" align="center" text="Mancini" />
          </a>
          <a href="https://github.com/carlosaore" target="_blank">
            <Text color="dark" size="S" align="center" text="Orellana Carlos" />
          </a>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <LinkedinIcon />
          <Text color="dark" size="M" align="center" text="Linkedin" />
          <a
            href="https://www.linkedin.com/in/evgeniya-gabrikova/"
            target="_blank"
          >
            <Text
              color="dark"
              size="S"
              align="center"
              text="Habrykava Yauheniya"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jacopo-luri-1111081a2/"
            target="_blank"
          >
            <Text color="dark" size="S" align="center" text="Luri Jacopo" />
          </a>
          <a href="https://www.linkedin.com/in/mancia08/" target="_blank">
            <Text color="dark" size="S" align="center" text="Mancini" />
          </a>
          <a href="https://www.linkedin.com/in/carlosaore/" target="_blank">
            <Text color="dark" size="S" align="center" text="Orellana Carlos" />
          </a>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <InfoIcon />
          <Text
            color="dark"
            size="M"
            align="center"
            text="Some other information"
          />
          <a
            href="https://github.com/Gabriellji/e-commerce-app"
            target="_blank"
          >
            <Text color="dark" size="S" align="center" text="GitHub Repo" />
          </a>
          <a href="https://www.wildcodeschool.com/" target="_blank">
            <Text color="dark" size="S" align="center" text="Our school" />
          </a>
          <a href="" target="_blank">
            <Text color="dark" size="S" align="center" text="scrivi qualcosa" />
          </a>
          <a href="" target="_blank">
            <Text color="dark" size="S" align="center" text="altre cose" />
          </a>
        </StyledFooterColumn>
      </FooterTextContainer>
    </StyledFooter>
  </>
);

export default Footer;
