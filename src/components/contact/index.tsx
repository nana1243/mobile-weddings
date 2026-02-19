import styles from './index.module.css';
import ContactBoard from "../contact-board";

const Contact = () => {
    return (
        <div className={styles.container}>
            <ContactBoard
                groupName = 'groom'
            />
            <ContactBoard
                groupName = 'bride'
            />
        </div>
    );
}

export default Contact;