import styles from "./introduction-section.module.css";

const IntroductionSection = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.textContainer}>
        <p>Rejoignez la nouvelle</p>
        <p>génération de livreurs</p>
          </div>
        <div className={styles.btn}>Devenir Rider</div>
    </div>
  );
};

export default IntroductionSection;
