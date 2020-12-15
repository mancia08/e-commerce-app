import { theme } from '../../../data/theme';
import styled from "styled-components";

const StyledContactInput = styled.input`
  height: ${theme.sizes.buttons.S};
  width: 100%;
  margin-top: ${theme.spacer};
  border: 1px solid ${theme.colors.dark};
  border-radius: calc(0.5 * ${theme.spacer});
  @media (max-width: ${theme.viewport.tablet}) {
    width: 50%;
  }
`;

const ContactInput = props => (
    <StyledContactInput type={props.type} onChange={props.action} value={props.value} name={props.name} required />
)

export default ContactInput;