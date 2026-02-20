import CallIcon from '@mui/icons-material/Call';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';

interface ContactItemProps {
    title: string;
    name?: string;
    phoneNumber: string;
    // stylesTitle : object;
}

const ContactItem = (props: ContactItemProps) => {
    const {title, name, phoneNumber} = props;

    return (
        <>
            <Box sx={{textAlign: 'center', p: 2}}>
                <p>{title} {name}</p>

                <IconButton
                    component="a"
                    href={`tel:${phoneNumber}`}
                    color="default"
                >
                    <CallIcon fontSize="large"/>
                </IconButton>

                {/* 문자 메시지 연결 버튼 */}
                <IconButton
                    component="a"
                    href={`sms:${phoneNumber}`}
                    color="default"
                    aria-label="문자 보내기"
                    sx={{ml: 1}}
                >
                    <EmailIcon fontSize="large"/>
                </IconButton>
            </Box>
        </>
    )
}

export default ContactItem;