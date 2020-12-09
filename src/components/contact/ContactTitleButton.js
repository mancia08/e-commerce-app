import ContactImage from "./ContactImage"

// import Button from "../atoms/button/Button"

const ContactTitleButton = props => (
    <>
        <h3>{props.heading}</h3>
        <button onClick={props.action}>{props.text}</button> 

    </>
)

export default ContactTitleButton
