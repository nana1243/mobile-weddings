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
                name={contactInfo?.name}
                phoneNumber={contactInfo?.phoneNumber}
            />
            <p>
                {relationship} 측 혼주
            </p>
            {contactFamily.map((contact, index) => (
                    <ContactItem
                        key={index}
                        name={contact.name}
                        relationShip={contact.relationShip}
                        phoneNumber={contact.phoneNumber}
                    />
                )
            )}
        </div>
    )
}


export default ContactBoard;