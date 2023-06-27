import styles from "./crypto-section.module.css";

const CryptoSection = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.textContainer}>
        <p>Payer un repas en crypto ?</p>
        <p>Oui c’est possible !</p>
      </div>
      <div className={styles.rechargeCryptoCard}>
        <p>
          Rechargez votre carte NOJYK virtuel via nos services partenaires, et
          utiliser vos cryptomonnaie dans la vie de tous les jours.
        </p>
        <button>Recharger mon soldes en crypto</button>
      </div>
    </div>
  );
};

export default CryptoSection;
