import React from "react";
import styles from "../header.module.css";
import Image from "next/image";

export default function ConnectBtn() {
  return (
    <div className={styles.connectBtnContainer}>
      <Image
        src="./assets/pictogram/spacehelmet.svg"
        width={30}
        height={30}
        alt="connection pictogram"
      />
      <p>Connexion</p>
    </div>
  );
}
