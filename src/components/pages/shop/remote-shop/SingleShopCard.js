import Text from "./../../../subatoms/text/Text";
import Button from "../../../subatoms/button/Button";
import {textData} from '../../../../data/textData'
import { theme } from "../../../../data/theme";
import styled from "styled-components";

const StyledSingleShopCard = styled.div`
  width: 350px;
  padding: ${theme.spacer};
  img {
    width: 100%;
  }
`;

const SingleShopCard = ({ imageS, name, price, onClick, id, onAddItemClick, index}) => {   //{ imageS, name, price, onClick, path}
  return (
    <StyledSingleShopCard>
      <img src={imageS} alt={name} />
      <Text color="dark" size="M" text={name} />
      <Text color="dark" size="S" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, obcaecati,
        porro hic magni aliquid error natus velit, nostrum maxime eligendi
        incidunt illo expedita? Recusandae obcaecati illum eum sequi, ullam
        veniam vel possimus totam omnis non vitae iste soluta nulla nesciunt
        autem aliquid maiores ad laborum at sed, laudantium rem cum."/>
      {/* Add method here */}
      {/* <Button action={() => onAddClick()} size="S" text="Add to cart" color="primary" /> */}
      <Button
      id={id}
      action={(e) => onClick(e)}
      size="S"
      color="primary"
      text={textData.shop.single.details}
      />
      <Button
      id={id}
      action={(e) => onAddItemClick(e)}
      size="S"
      color="primary"
      text={textData.shop.single.add}
      />
      <Text color="primary" size="S" text={price} />
    </StyledSingleShopCard>
  );
}

export default SingleShopCard;
