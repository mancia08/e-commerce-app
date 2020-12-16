import { theme } from '../../../data/theme';
import styled from "styled-components";

import mapimg from '../../../styles/images/mapimg.jpg';

const StyledMapImage = styled.img`
    width: 100%;
    height: 600px;
    object-fit: cover;
    opacity: ${theme.opacity.eigthy};
    @media (max-width: ${theme.viewport.tablet}) {
        height: 400px;
    }
`;

const MapImage = () => (
    <StyledMapImage
        src={mapimg}
        alt="View from a London bridge"
    />
)

export default MapImage;