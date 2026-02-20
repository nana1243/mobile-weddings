import styles from './index.module.css';
import ContactBoard from "../contact-board";

const Contact = () => {
    return (
        <div style={{backgroundColor: '#f0f0f0'}}>
            <div className={styles.container}>
                <ContactBoard
                    groupName='groom'
                />
                <ContactBoard
                    groupName='bride'
                />
            </div>
        </div>
    );
}

export default Contact;