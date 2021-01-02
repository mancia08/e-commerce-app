import React, { Component } from "react";
import { theme } from "../../../data/theme";
import styled from "styled-components";
import { textData } from "../../../data/textData";

import Text from "../../subatoms/text/Text";
import ContactForm from "./ContactForm";
import ContactImage from "../../atoms/images/ContactImage";
import ContactTitleButton from "./ContactTitleButton";
import Submitted from "./Submitted";

const StyledContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: calc(2 * ${theme.spacer});
  margin: 0 calc(2 * ${theme.spacer});
  min-height: 70vh;
  section {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(2 * ${theme.spacer});
    justify-content: center;
  }
  @media (max-width: ${theme.viewport.tablet}) {
    flex-direction: column;
    section {
      width: 100%;
    }
  }
`;

class ContactContainer extends Component {
  state = {
    buyerClicked: false,
    sellerClicked: false,
    didSubmit: false,
  };

  handleBuyerClicked = () => {
    this.setState({
      buyerClicked: !this.state.buyerClicked,
      sellerClicked: false,
    });
  };

  handleSellerClicked = () => {
    this.setState({
      buyerClicked: false,
      sellerClicked: !this.state.sellerClicked,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0)
    let responses = [];
    const RegExp = [
      {
        client: {
          check: (value) =>
            /^[a-z *]{1,30}$/gim.test(
              value
            ) /* NAME from 3 to 20 letters accepts space */,
          error: "Type your name!",
        },
        seller: {
          check: (value) =>
            /^[a-z]{5}\d{5}$/gm.test(value) /* shop id 5letters+5numbers */,
          error: "Type your shop ID! (5letters and 5 numbers)",
        },
      },
      {
        check: (value) =>
          /[\w . -]{3,30}@[\w]{3,20}.[\w]{2,5}/gm.test(
            value
          ) /* email address */,
        error: "Type a correct email",
      },
      {
        check: (value) => /^\d{16}$$/gm.test(value) /* ID 16 numbers */,
        error: "Type a correct ID (16numbers)",
      },
      {
        check: (value) =>
          /^\d{8,15}$$/gm.test(value) /*phone number from 8 to 15 numbers */,
        error: "Type a correct Phone Number!",
      },
    ];
    let inputs = Array.prototype.slice.call(document.querySelectorAll("input"));
    for (let i = 0; i <= inputs.length; i++) {
      i === 0
        ? this.state.buyerClicked
          ? RegExp[i].client.check(inputs[i].value)
            ? responses.push(true)
            : alert(RegExp[i].client.error)
          : RegExp[i].seller.check(inputs[i].value)
          ? responses.push(true)
          : alert(RegExp[i].seller.error)
        : i === 4
        ? document.querySelectorAll("textArea")[0].value.length > 15
          ? responses.push(true)
          : alert("Type a longer message")
        : RegExp[i].check(inputs[i].value)
        ? responses.push(true)
        : alert(RegExp[i].error);
      responses.length === 5 && this.setState({ didSubmit: true });
    }
    /*   responses.length === 4 && this.setState({ inputCheck: true }); */
    /* message should be 15letters long at least */
    /*     document.querySelectorAll("textArea")[0].value.length > 15
      ? this.state.inputCheck &&
        this.setState({
          didSubmit: true,
        })
      : alert("please type a longer message"); */
  };

  render() {
    return (
      <StyledContactContainer>
        {this.state.didSubmit ? (
          <Submitted />
        ) : (
          <>
            <section>
              <Text color="primary" size="L" text={textData.contact.title} />

              <ContactTitleButton
                text={textData.contact.button}
                heading={textData.contact.client}
                action={this.handleBuyerClicked}
              />
              <ContactTitleButton
                text={textData.contact.button}
                heading={textData.contact.seller}
                action={this.handleSellerClicked}
              />
            </section>
            <section>
              {this.state.sellerClicked ||
              this.state.buyerClicked ||
              this.state.didSubmit ? (
                <>
                  {this.state.buyerClicked && !this.state.didSubmit && (
                    <ContactForm
                      name={textData.contact.form.first}
                      id={textData.contact.form.second}
                      action={this.handleSubmit}
                    />
                  )}
                  {this.state.sellerClicked && !this.state.didSubmit && (
                    <ContactForm
                      name={textData.contact.form.sixth}
                      id={textData.contact.form.seventh}
                      action={this.handleSubmit}
                    />
                  )}
                </>
              ) : (
                <ContactImage />
              )}
            </section>
          </>
        )}
      </StyledContactContainer>
    );
  }
}

export default ContactContainer;
