import styled from "styled-components";
import { theme } from "../../../data/theme"
import { textData } from "../../../data/textData"

import homeimg from "../../../styles/images/homeimg.jpg"
import Text from "../../atoms/text/Text"

const StyledHomeImg = styled.div`
    width: 100%;
    height: 600px;
    object-fit: cover;
    opacity: ${theme.opacity.sixty};
    background-image: url(${homeimg});
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    div {
        background-color: ${theme.colors.dark};
        opacity: ${theme.opacity.eigthy};
        display: flex;
        flex-direction: column;
        margin-bottom: calc(2 * ${theme.spacer});
        padding: 0 ${theme.spacer};
    }
`;

const HomeImg = () => (
    <StyledHomeImg>
        <div>
            <Text color="light" size="XL" text={textData.homepage.title1} />
            <Text color="light" size="S" text={textData.homepage.title2} />
            <Text color="light" size="S" text={textData.homepage.title3} />
        </div>
    </StyledHomeImg>
)

export default HomeImg;