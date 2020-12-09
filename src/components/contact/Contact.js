import Navbar from "./../atoms/navbar/Navbar"
import SuperNav from "./../atoms/SuperNav"
import Hr from "../atoms/text/Hr"

const Contact = props => (
    <div>
        <SuperNav/>
        <Hr />
        <Navbar/>
        <h1>{props.title}</h1>
    </div>
)

export default Contact;