import styles from './index.module.css'

const Greeting = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageAreaGuide}>
                <div className={styles.nameOverlay}>
                    <span>이준서</span>
                    <span>김은재</span>
                </div>
                <div className={styles.informationOverlay}>
                    <p>
                    2025.10.18 SAT PM 02:30
                    </p>
                    <p>
                        메종 드 프리미어 그랜드홀
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Greeting;