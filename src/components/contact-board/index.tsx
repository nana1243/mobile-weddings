import ContactItem from "../contact-item";
import {CONTACT_BRIDE_GROOM_INFO} from "../../constants/contact";
import {CONTACT_FAMILY_INFO} from "../../constants/contact";
import styles from './index.module.css';

interface ContactBoardProps {
    groupName: 'groom' | 'bride';
}

const ContactBoard = (props: ContactBoardProps) => {
    const {groupName} = props;
    const contactInfo = CONTACT_BRIDE_GROOM_INFO[groupName];
    const contactFamily = CONTACT_FAMILY_INFO.filter(contact => contact.relationShip === groupName);

    const relationship = groupName === 'groom' ? '신랑측' : '신부측';


    return (
        <div className={styles.container}>
            <ContactItem
                title={contactInfo.title}
                phoneNumber={contactInfo?.phoneNumber}
            />
            <p>
                {relationship} 측 혼주
            </p>
            {contactFamily.map((contact, index) => (
                    <ContactItem
                        key={index}
                        title={contact.relationShip === 'groom' ? `신랑의 ${contact.title}` : `신부의 ${contact.title}`}
                        name={contact.name}
                        phoneNumber={contact.phoneNumber}
                    />
                )
            )}
        </div>
    )
}


export default ContactBoard;