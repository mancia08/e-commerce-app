import { theme } from "../../../data/theme";
import styled from "styled-components";

const StyledShopBannerImage = styled.img`

`;

const ShopBannerImage = props => (
    <img src={props.image} atl={props.alt} />
)

export default ShopBannerImage;