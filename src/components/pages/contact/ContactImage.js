import { theme } from '../../../data/theme';
import styled from "styled-components";

import contactimg from '../../../styles/images/contactimg.jpg';

const StyledContactImage = styled.img`
    width: 100%;
    height: 100%;
    @media (max-width: ${theme.viewport.tablet}) {
        height: 80%;
        width: 80%;
    }
`;

const ContactImage = () => (
    <StyledContactImage 
        src={contactimg}
        alt="Norris Inc. customer service" 
    />
)

export default ContactImage;