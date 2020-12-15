import { theme } from '../../../data/theme';
import styled from "styled-components";

const StyledTextArea = styled.input`

`;

const TextArea = props => (
    <StyledTextArea placeholder={props.placholder} />
)

export default TextArea;