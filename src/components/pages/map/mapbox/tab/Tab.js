import styled from "styled-components";
import { theme } from "../../../../../data/theme";

import Text from "../../../../subatoms/text/Text";

const StyledListing = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 ${theme.spacer};
    overflow: auto;
    :hover {
        background-color: ${theme.colors.secondary};
    }
`;

const StyledAddress = styled.div`
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid ${theme.colors.primary};
    padding-bottom: ${theme.spacer};
`;

const Tab = ({ id, name, address, onClick, city, phone }) => {
    return (
        <StyledListing id={`listing-${id}`}>
            <Text 
                id={`listing-${id}`}
                onClick={(e) => onClick(e)}
                text={name}
                size="M"
                color="primary"
            />
            <Text text={address} size="S" color="dark" />
            <StyledAddress>
                <Text text={city} size="XS" color="dark" />
                <Text text={phone} size="XS" color="dark" />
            </StyledAddress>
        </StyledListing>
    )
}

export default Tab;