import Navbar from "./../atoms/navbar/Navbar"
import SuperNav from "./../atoms/SuperNav"

const Contact = props => (
    <div>
        <SuperNav/>
        <Navbar/>
        <h1>{props.title}</h1>
    </div>
)

export default Contact;