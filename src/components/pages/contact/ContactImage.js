import styled from "styled-components";
import contactimg from '../../../styles/images/contactimg.jpg';

const StyledContactImage = styled.img`
    width: 100%;
    height: 100%;
`;

const ContactImage = () => (
    <StyledContactImage 
        src={contactimg}
        alt="Norris Inc. customer service" 
    />
)

export default ContactImage;