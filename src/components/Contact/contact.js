import { FaPhoneAlt,FaEnvelopeOpenText,FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styles from './contact.module.css';

const handleURL = (url) => {
    return event => window.open(url, "_blank")
}
const Contact = () => {
    return (
        <div className={styles.Contact}>
            <div className={styles.ContactIcons}>
            <FaPhoneAlt color='black' size='40px' style={{padding: '1%'}}
            onClick={handleURL('https://hihello.me/p/bcb53d30-d5ed-45dd-bee1-00cddb3e4fd5')} />
            <FaEnvelopeOpenText color='black' size='40px' style={{padding: '1%'}}
            onClick={handleURL('mailto:jdkiser228@gmail.com')} />
            <FaGithubSquare color='black' size='40px' style={{padding: '1%'}}
            onClick={handleURL('https://github.com/JuliaKiser')} />
            <FaLinkedin color='black' size='40px' style={{padding: '1%'}}
            onClick={handleURL('https://www.linkedin.com/in/julia-kiser-mba-09a45373/')} />
        </div>
        </div>
    )
}

export default Contact;