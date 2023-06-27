import styles from "./mobile-apps-section.module.css";
import Image from "next/image";

const MobileAppsSection = () => {
  return (
    <div className={styles.globalContainer}>
      <Image
        src="/assets/images/mobile-app.png"
        width={676}
        height={700}
        alt="image de l'application mobile"
      />
      <div className={styles.descriptionContainer}>
        <Image
          src="/assets/logos/nojyk-black.svg"
          width={260}
          height={80}
          alt="logo nojyk"
        />
        <p>
          Découvrez notre application <br/>et commandervotre premier repas<br/>grâce à 
          nos services
        </p>
        <div className={styles.storesContainer}>
          <Image
            src="/assets/logos/google-play.svg"
            width={270}
            height={80}
            alt="logo google play"
          />
          <Image
            src="/assets/logos/apple-store.svg"
            width={270}
            height={80}
            alt="logo apple store"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppsSection;
