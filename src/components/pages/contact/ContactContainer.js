import React, { Component } from "react";
import { theme } from "../../../data/theme";
import styled from "styled-components";
import { textData } from "../../../data/textData";

import Text from "../../subatoms/text/Text";
import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";
import ContactTitleButton from "./ContactTitleButton";
import Submitted from "./Submitted";

const StyledContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: calc(2 * ${theme.spacer});
  margin: 0 calc(2 * ${theme.spacer});
  min-height:70vh;
  section {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(2 * ${theme.spacer});
    justify-content:center
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

  handleSubmit = () => {
    this.setState({
      didSubmit: true,
    });
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
                  {this.state.buyerClicked && !this.state.didSubmit ? (
                    <ContactForm
                      name={textData.contact.form.first}
                      id={textData.contact.form.second}
                      action={this.handleSubmit}
                    />
                  ) : (
                    ""
                  )}
                  {this.state.sellerClicked && !this.state.didSubmit ? (
                    <ContactForm
                      name={textData.contact.form.sixth}
                      id={textData.contact.form.seventh}
                      action={this.handleSubmit}
                    />
                  ) : (
                    ""
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
