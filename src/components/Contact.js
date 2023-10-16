import "../css/Contact.css"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

const Contact = () => {
    return ( 
        <div className="main contact" id="contact">
            <h2>Contact me</h2>
            <div className="underline"></div>
            <div className="social-media">
                <a href="https://www.instagram.com/saisha._.17/" target="_blank"><img src={instagram}/></a>
                <a href="www.linkedin.com/in/veerabhadra-saisha-aa1b17286" target="_blank"><img src={linkedin}/></a>
                <a href="https://github.com/vsaisha1712" target="_blank"><img src={github}/></a>

            </div>
        </div>
     );
}
 
export default Contact;
