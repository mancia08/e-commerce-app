import React from "react";
import styled from "styled-components";
import { theme } from "../../../data/theme";
import Text from "../../subatoms/text/Text";
import Logo from "../../subatoms/logo/Logo";
import { textData } from "../../../data/textData";

const StyledFooterHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacer};
    div {
        display: flex;
        justify-content: center;
    }
`;

const FooterHeader = () => (
  <StyledFooterHeader>
    <div>
      <Logo type="footer" />
      <Text color="primary" size="XL" text={textData.homepage.title1} />
    </div>
    <div>
      <Text color="dark" size="S" text={textData.homepage.title4} />
    </div>
  </StyledFooterHeader>
);

export default FooterHeader;