import styles from './introduction-section.module.css'

const IntroductionSection = () => {
    return (
        <div className={styles.globalContainer}>
            <div className={styles.textContainer}>
                <p>Qu&apos;est-ce qu&apos;on mange</p>
                <p>ce soir ?</p>
            </div>
            <button>Je m&apos;inscris</button>
        </div>
    );
}

export default IntroductionSection;