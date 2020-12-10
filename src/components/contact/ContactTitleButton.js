import Button from "../atoms/button/Button";
import Text from "../atoms/text/Text";

const ContactTitleButton = props => (
    <>
        <Text color="dark" size="L" text={props.heading} />
        <Button action={props.action} size="M" text={props.text} color="light" />
    </>
)

export default ContactTitleButton
