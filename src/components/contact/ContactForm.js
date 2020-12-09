const { default: ButtonS } = require("../atoms/button/ButtonS");

const ContactForm = props => (
                <form>
                <label>
                    {props.name}:
                    <input type="text" name="name" />
                </label>
                <label>
                    {props.id}:
                    <input type="text" name="orderID" />
                </label>
                <label>
                    email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Telephone number:
                    <input type="text" name="telephoneNumber" />
                </label>
                <button text="Submit" onClick={props.action}>Submit</button>
            </form>
)

export default ContactForm;