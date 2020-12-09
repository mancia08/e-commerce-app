import React, { Component } from 'react';
import Navbar from "./../atoms/navbar/Navbar"
import SuperNav from "./../atoms/SuperNav"
import Hr from "../atoms/hr/Hr"
import Text from "./../atoms/text/Text";
import ContactForm from "./ContactForm"
import ContactImage from './ContactImage';
import ContactTitleButton from './ContactTitleButton';
import Submitted from "./Submitted"

class Contact extends Component {
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
            <div>
                <SuperNav />
                <Hr />
                <Navbar />
                <Text color="dark" size="L" text="Feel free to contact us" />
                
                <ContactTitleButton
                    text="Click here for contacting our customer service"
                    heading="Did you have any issue with your order?"
                    action={this.handleBuyerClicked}
                />
                <ContactTitleButton
                    text="Click here for contacting our customer service"
                    heading="Partner local store"
                    action={this.handleSellerClicked}
                />

                
                {this.state.buyerClicked && !this.state.didSubmit
                    ? <ContactForm name="Name" id="ID" action={this.handleSubmit}/>
                    :""}
                {this.state.sellerClicked && !this.state.didSubmit
                    ?<ContactForm  name="Shop ID" id="order ID" action={this.handleSubmit}/>
                    :""}
                {this.state.sellerClicked || this.state.buyerClicked || this.state.didSubmit
                    ? ""
                    :<ContactImage />}
                {this.state.didSubmit
                ? <Submitted />
                : ""}
            </div>
        );
    }
}

export default Contact;