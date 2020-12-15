import { theme } from '../../../data/theme';
import styled from "styled-components";

const StyledTextArea = styled.textarea`
    max-width: 100%;
    margin-top: ${theme.spacer};
    border: 1px solid ${theme.colors.dark};
    border-radius: calc(0.5 * ${theme.spacer});
    resize: none;
    width: 100%; 
    max-width: 100%;
    @media (max-width: ${theme.viewport.tablet}) {
        margin-left: ${theme.spacer};
  }
`;

const TextArea = props => (
    <StyledTextArea placeholder={props.placeholder} rows="4" cols="45" required />
)

export default TextArea;