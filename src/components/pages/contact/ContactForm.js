import styled from "styled-components";
import { theme } from "../../../data/theme"

import Button from "../../atoms/button/Button";
import Text from "../../atoms/text/Text";
import ContactInput from "../../atoms/input/ContactInput"
import TextArea from "../../atoms/input/TextArea"

const StyledContactForm = styled.div`
    height: 100%;
    width: 100%;
    form { 
        min-height: 300px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    section {
        display: flex;
        margin-bottom: ${theme.spacer};
    };
    section:last-child {
        flex: 2;
    }
    label {
        width: 100%;
        padding: ${theme.spacer};
    }
    @media (max-width: ${theme.viewport.tablet}) {
        form {
            flex-direction: column;
            flex-wrap: nowrap;
        }
        label {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
        }
    }
`;


const ContactForm = props => (
    <StyledContactForm>
        <form>
            <section>
                <label>
                    <Text color="dark" size="S" text={`${props.name}:`}/>
                    <ContactInput type="text" name="name" />
                </label>
                <label>
                    <Text color="dark" size="S" text="Email:" />
                    <ContactInput type="text" name="email" />
                </label>
            </section>
            <section>
                <label>
                    <Text color="dark" size="S" text={`${props.id}:`} />
                    <ContactInput type="text" name="orderID" />
                </label>
                <label>
                    <Text color="dark" size="S" text="Telephone number:" />
                    <ContactInput type="text" name="telephoneNumber" />
                </label>
            </section>
            <section>
                <label>
                    <Text color="dark" size="S" text="Message:" />
                    <TextArea placeholder="Type your message here..." />
                </label>
                <Button action={props.action} size="S" text="Submit" color="primary" width="parent" />
            </section>
        </form>
    </StyledContactForm>
)

export default ContactForm;