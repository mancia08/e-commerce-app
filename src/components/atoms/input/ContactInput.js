import { theme } from '../../../data/theme';
import styled from "styled-components";

const StyledContactInput = styled.input`
  height: calc(1.5 * ${theme.sizes.buttons.S});
  width: 120%;
  margin-top: ${theme.spacer};
  @media (min-width: ${theme.viewport.tablet}) {
    height: ${theme.sizes.buttons.S};
  }
`;

const ContactInput = props => (
    <StyledContactInput type={props.type} onChange={props.action} value={props.value} name={props.name} />
)

export default ContactInput;