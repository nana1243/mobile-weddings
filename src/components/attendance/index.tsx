import styles from './index.module.css';
import Button from '@mui/material/Button';

const ATTENDANCE_TYPOGRAPHY = [
    '축하의 마음으로 참석해 주실',
    '모든 분을 정중히 모시고자 하오니,',
    '참석 여부를 알려주시면 감사하겠습니다.'

]

const Attendance = () => {

    const handleOnclick = (e) => {
        console.log('e', e)
    }


    return (
        <div className={styles.container}>
            <p className={styles.title}>참석 의사 전달</p>
            {ATTENDANCE_TYPOGRAPHY.map(typography => {
                return (<p className={styles.letter}>{typography}</p>)
            })}
            <div className={styles.boxContainer}>
                <Button
                    fullWidth
                    variant="contained"
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#BFC9FF",
                        padding: "18px 36px",
                        fontSize: "18px"
                    }}
                    onClick={handleOnclick}>
                    참석하기
                </Button>
            </div>
        </div>
    )
}


export default Attendance;