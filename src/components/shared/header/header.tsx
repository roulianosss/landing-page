import styles from "./header.module.css";
import HeaderLink from "./header-components/header-link";
import NojykLogo from "../nojykLogo";
import ConnectBtn from "./header-components/connect-btn";

const header = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.logoAndLinksContainer}>
        <NojykLogo size={130} />
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

export default header;
