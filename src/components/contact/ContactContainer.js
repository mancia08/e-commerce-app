import React, { Component } from 'react';
import { theme } from '../../data/theme'
import styled from "styled-components";

import Text from "../atoms/text/Text";
import ContactForm from "./ContactForm"
import ContactImage from './ContactImage';
import ContactTitleButton from './ContactTitleButton';
import Submitted from "./Submitted"

const StyledContactContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: calc(2 * ${theme.spacer});
    margin: 0 calc(2 * ${theme.spacer});
    section {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: calc(2 * ${theme.spacer});
    }
`;

class ContactContainer extends Component {
    state={
        buyerClicked : false,
        sellerClicked : false,
        didSubmit : false
    }

    handleBuyerClicked = () => {
        this.setState({
            buyerClicked : !this.state.buyerClicked,
            sellerClicked : false
        })

    }

    handleSellerClicked = () => {
        this.setState({
            buyerClicked : false,
            sellerClicked : !this.state.sellerClicked,
        })      
    }

    handleSubmit = () => {
        this.setState({
            didSubmit : true,
        })
    }

    render() {
        return (
            <StyledContactContainer>
                {this.state.didSubmit
                    ? <Submitted />
                    : 
                        <>
                            <section>
                                <Text color="primary" size="L" text="Feel free to contact us" />
                                
                                <ContactTitleButton
                                    text="Contact our customer service"
                                    heading="Did you have any issue with your order?"
                                    action={this.handleBuyerClicked}
                                />
                                <ContactTitleButton
                                    text="Contact our customer service"
                                    heading="Partner local store"
                                    action={this.handleSellerClicked}
                                />
                            </section>
                            <section>
                                {this.state.sellerClicked || this.state.buyerClicked || this.state.didSubmit
                                    ? 
                                        <>
                                            {this.state.buyerClicked && !this.state.didSubmit
                                                ? <ContactForm name="Name" id="ID" action={this.handleSubmit} />
                                                : ""}
                                            {this.state.sellerClicked && !this.state.didSubmit
                                                ? <ContactForm name="Shop ID" id="order ID" action={this.handleSubmit} />
                                                : ""}
                                        </>
                                    :<ContactImage />}
                            </section>
                        </>
                }
            </StyledContactContainer>
        );
    }
}


export default ContactContainer;