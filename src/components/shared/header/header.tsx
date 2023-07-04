'use client'

import styles from "./header.module.css";
import HeaderLink from "./header-components/header-link";
import NojykLogo from "../nojykLogo";
import ConnectBtn from "./header-components/connect-btn";
import Image from "next/image";
import { useState } from "react";

const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <div className={styles.globalContainer} id="header" style={{maxHeight: isOpenMenu ? '600px' : '60px'}}>
      <div className={styles.logoAndLinksContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="./assets/pictogram/hamburger.svg"
            height={40}
            width={40}
            alt="menu icon"
            className={styles.menuIcon}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
          <NojykLogo size={130} />
        </div>
        <div className={styles.linksContainer}>
          <HeaderLink url="./" title="Accueil" />
          <HeaderLink url="./livreur" title="Devenez livreur" />
          <HeaderLink
            url="./restaurateur"
            title="Rejoignez nos restaurateurs"
          />
        </div>
      </div>
      <ConnectBtn />
    </div>
  );
};

export default Header;
