import Button from "../../subatoms/button/Button";
import Text from "../../subatoms/text/Text";

const ContactTitleButton = (props) => (
  <>
    <Text color="dark" size="M" text={props.heading} align="center" />
    <Button
      action={props.action}
      size="S"
      text={props.text}
      color="primary"
      width="parent"
    />
  </>
);

export default ContactTitleButton;
