import Button from "../../atoms/button/Button";
import Text from "../../atoms/text/Text";

const ContactForm = props => (
    <form>
        <label>
            <Text color="dark" size="M" text={`${props.name}:`}/>
            <input type="text" name="name" />
        </label>
        <label>
            <Text color="dark" size="M" text={`${props.id}:`} />
            <input type="text" name="orderID" />
        </label>
        <label>
            <Text color="dark" size="M" text="Email:" />
            <input type="text" name="email" />
        </label>
        <label>
            <Text color="dark" size="M" text="Telephone number:" />
            <input type="text" name="telephoneNumber" />
        </label>
        <Button action={props.action} size="M" text="Submit" color="light" />
    </form>
)

export default ContactForm;