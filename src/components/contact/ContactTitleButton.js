import ContactImage from "./ContactImage"

import ButtonS from "../atoms/button/ButtonS"

const ContactTitleButton = props => (
    <>
        <h3>{props.heading}</h3>
        <button onClick={props.action}>{props.text}</button> 

    </>
)

export default ContactTitleButton
