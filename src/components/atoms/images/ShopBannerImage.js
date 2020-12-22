import styled from "styled-components";
import { theme } from "../../../data/theme"

const StyledShopBannerImage = styled.img`
  height: 250px;
  width: 375px;
  @media (max-width: ${theme.viewport.mobile}) {
    height: 200px;
    width: 250px;
  }
`;

const ShopBannerImage = ({ image, alt }) => (
  <StyledShopBannerImage src={image} alt={alt} />
);

export default ShopBannerImage;
