import { useState } from "react";
import styles from "./marseille-section.module.css";
import Image from "next/image";

const MarseilleSection = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.marseilleBackground}>
        <div className={styles.wordingContainer}>
          <p>Faites le choix d’une app</p>
          <p>100% made in France,</p>
          <div className={styles.textContainer}>
            <p>&</p>
            <p>développé à Marseille</p>
          </div>
        </div>
      </div>
      <div className={styles.whiteBackground}>
        <Image
          src="/assets/images/french-flag.png"
          width={460}
          height={346}
          alt="image de drapeau Français"
        />
        <p>
          Les équipes NOJYK sont basée à Paris & Marseille.<br/> Depuis ces villes
          nous développent une nouvelle application de commande en ligne,<br/> afin
          de vous offrir des repas plus respectueux des restaurateurs et
          livreurs
        </p>
      </div>
    </div>
  );
};

export default MarseilleSection;
