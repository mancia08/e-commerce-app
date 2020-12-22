import styled from "styled-components";
import { theme } from "../../../data/theme";
import { textData } from "../../../data/textData";

import Button from "../../subatoms/button/Button";
import Text from "../../subatoms/text/Text";
import ContactInput from "../../subatoms/input/ContactInput";
import TextArea from "../../subatoms/input/TextArea";

const StyledContactForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
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

const ContactForm = (props) => (
  <StyledContactForm>
    <form>
      <section>
        <label>
          <Text color="dark" size="S" text={`${props.name}:`} />
          <ContactInput type="text" name="name" />
        </label>
        <label>
          <Text
            color="dark"
            size="S"
            text={`${textData.contact.form.third}:`}
          />
          <ContactInput type="text" name="email" />
        </label>
      </section>
      <section>
        <label>
          <Text color="dark" size="S" text={`${props.id}:`} />
          <ContactInput type="text" name="orderID" />
        </label>
        <label>
          <Text
            color="dark"
            size="S"
            text={`${textData.contact.form.forth}:`}
          />
          <ContactInput type="text" name="telephoneNumber" />
        </label>
      </section>
      <section>
        <label>
          <Text
            color="dark"
            size="S"
            text={`${textData.contact.form.fifth}:`}
          />
          <TextArea placeholder={textData.contact.form.placeholder} />
        </label>
        <Button
          action={props.action}
          size="S"
          text={textData.contact.form.button}
          color="primary"
          width="parent"
        />
      </section>
    </form>
  </StyledContactForm>
);

export default ContactForm;
