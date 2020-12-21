import { theme } from "../../../data/theme";
import styled from "styled-components";

import Text from "../../subatoms/text/Text";
import Logo from "../../subatoms/logo/Logo";

const StyledSubmitted = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(2 * ${theme.spacer});
`;

const Submitted = () => (
  <StyledSubmitted>
    <Text
      color="primary"
      size="S"
      text="Thank you for contacting our customer service"
    />
    <Text color="dark" size="M" text="Your message has been submitted" />
    <Text
      color="dark"
      size="M"
      text="You can safely close the page or go back to shopping"
    />
    <Text color="primary" size="L" text="Norris Inc." />
    <Logo />
  </StyledSubmitted>
);

export default Submitted;
