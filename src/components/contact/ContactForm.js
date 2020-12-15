import Button from "../atoms/button/Button";
import Text from "../atoms/text/Text";
import ContactInput from "../atoms/input/ContactInput"
import TextArea from "../atoms/input/TextArea"

const ContactForm = props => (
    <form>
        <label>
            <Text color="dark" size="M" text={`${props.name}:`}/>
            <ContactInput type="text" name="name" />
        </label>
        <label>
            <Text color="dark" size="M" text={`${props.id}:`} />
            <ContactInput type="text" name="orderID" />
        </label>
        <label>
            <Text color="dark" size="M" text="Email:" />
            <ContactInput type="text" name="email" />
        </label>
        <label>
            <Text color="dark" size="M" text="Telephone number:" />
            <ContactInput type="text" name="telephoneNumber" />
        </label>
        <labe>
            <Text color="dark" size="M" text="Message:" />
            <TextArea placeholder="Type your message here..." />
        </labe>

        <Button action={props.action} size="M" text="Submit" color="light" />
    </form>
)

export default ContactForm;