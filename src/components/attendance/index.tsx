import styles from './index.module.css';
import Button from '@mui/material/Button';
import confetti from 'canvas-confetti';

const ATTENDANCE_TYPOGRAPHY = [
    '축하의 마음으로 참석해 주실',
    '모든 분을 정중히 모시고자 하오니,',
    '참석 여부를 알려주시면 감사하겠습니다.'

]

const Attendance = () => {
    const handleSpread = () => {
        // 이모지 설정
        const scalar = 6;
        // @ts-ignore
        const confettiAny = confetti as any;
        const text1 = confettiAny.shapeFromText({text: '고마워', scalar: 20});

        const flower = confettiAny.shapeFromText({text: '🌸', scalar});
        const heart = confettiAny.shapeFromText({text: '❤️', scalar});
        
        confetti({
            shapes: [text1, flower, heart],
            particleCount: 30,
            spread: 90,
            origin: {y: 0.6},
            scalar: 1,
            colors: ['#FFC0CB', '#FFB6C1', '#BFC9FF'], // 벚꽃과 버튼 색상에 맞춘 톤
            zIndex: 9999
        });
    };


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
                    onClick={handleSpread}>
                    참석하기
                </Button>
            </div>
        </div>
    )
}


export default Attendance;