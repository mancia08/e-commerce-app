import { Link } from "react-router-dom";
import { theme } from "../../../../data/theme";
import styled from "styled-components";

import Text from "./../../../subatoms/text/Text";

const StyledShopLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const StyledShopLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const StyledShopCard = styled.div`
  background-color: ${theme.colors.grey};
  border-radius: ${theme.spacer};
  display: flex;
  gap: ${theme.spacer};
  align-items: center;
  padding: ${theme.spacer};
  @media (min-width: ${theme.viewport.tablet}) {
      height: 100px;
      justify-content: space-evenly;
  }
  :hover {
      background-color: ${theme.colors.secondary};
  }
`;

const ShopIcon = ({ path, icon, title, text }) => (
  <StyledShopLink to={path}>
    <StyledShopCard>
      <StyledShopLogo src={icon} alt={title} />
      <div>
        <Text color="primary" size="M" text={title} />
        <Text color="dark" size="S" text={text} />
      </div>
    </StyledShopCard>
  </StyledShopLink>
);

export default ShopIcon;
