import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";
import Text from "../../subatoms/text/Text";
import Hr from "../../subatoms/hr/Hr";
import Logo from "../../subatoms/logo/Logo";
import { textData } from "../../../data/textData";

const StyledFooter = styled.div`
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: ${theme.viewport.tablet}) {
    min-height: 35vw;
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
  @media (min-width: ${theme.viewport.tablet}) {
    :nth-child(2) {
      align-self: auto;
    }
  }
`;
const Footer = () => (
  <>
    <Hr type="footer" />
    <StyledFooter>
      <Logo type="footer" />
      <FooterTextContainer>
        {textData.footer.map((column, index) => (
          <StyledFooterColumn key={index}>
            {column.icon}
            <Text
              key={index}
              color="dark"
              size="M"
              align="center"
              text={column.title}
            />
            {column.links.map((line, index) => (
              <a key={index} href={line.link} target="_blank">
                <Text
                  key={index}
                  color="dark"
                  size="S"
                  align="center"
                  text={line.name}
                />
              </a>
            ))}
          </StyledFooterColumn>
        ))}
      </FooterTextContainer>
    </StyledFooter>
  </>
);

export default Footer;
