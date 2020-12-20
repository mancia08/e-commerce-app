import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";
import Text from "../../subatoms/text/Text";
import Hr from "../../subatoms/hr/Hr";

const StyledFooter = styled.div`
  background-color: ${theme.colors.light};
  @media (min-width: ${theme.viewport.tablet}) {
    height: 40vw;
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
  @media (min-width: ${theme.viewport.tablet}) {
    flex-direction: row;
  }
`;

const StyledFooterColumn = styled.div`
  width: 40vw;
  :nth-child(2) {
    align-self: flex-end;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Hr type="footer" />
    METTICI IL LOGO
    <FooterTextContainer>
      <StyledFooterColumn>
        <Text color="dark" size="M" align="center" text="Title" />
        <Text color="dard" size="S" align="center" text="ciao" />
        <Text color="dard" size="S" align="center" text="ciao" />
        <Text color="dard" size="S" align="center" text="ciao" />
        <Text color="dard" size="S" align="center" text="ciao" />
      </StyledFooterColumn>
      <StyledFooterColumn>
        <Text color="dark" size="M" align="center" text="Title" />
        <Text color="dard" size="S" align="center" text="ciao" />
        <Text color="dard" size="S" align="center" text="ciao" />
        <Text color="dard" size="S" align="center" text="ciao" />
        <Text color="dard" size="S" align="center" text="ciao" />
      </StyledFooterColumn>
      <StyledFooterColumn>
        <Text color="dark" size="M" align="center" text="Title" />
        <Text color="dard" size="S" align="center" text="ciao" />
        <Text color="dard" size="S" align="center" text="ciao" />
        <Text color="dard" size="S" align="center" text="ciao" />
        <Text color="dard" size="S" align="center" text="ciao" />
      </StyledFooterColumn>
    </FooterTextContainer>
  </StyledFooter>
);

export default Footer;
