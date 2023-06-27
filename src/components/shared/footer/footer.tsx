import Link from "next/link";
import NojykLogo from "../nojykLogo";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.globalContainer}>
      <NojykLogo size={130} />
      <div className={styles.categoriesContainer}>
        <div className={styles.groupContainer}>
          <h3>LIENS</h3>
          <Link href="./">Accueil</Link>
          <Link href="./">Page livreur</Link>
          <Link href="./">Page restaurateur</Link>
        </div>
        <div className={styles.groupContainer}>
          <h3>CONTACT</h3>
          <Link href={`tel:0600000000}`}>Tel : 06.00.00.00.00</Link>
          <Link href={"mailto:contact@nojyk.com"}>Mail : contact@nojyk</Link>
        </div>
        <div className={styles.groupContainer}>
          <h3>APPLICATION</h3>
          <Image
            src="/assets/logos/google-play.svg"
            width={170}
            height={50}
            alt="logo google play"
          />
          <Image
            src="/assets/logos/apple-store.svg"
            width={160}
            height={50}
            alt="logo apple store"
          />
        </div>
        <div className={styles.groupContainer}>
          <h3>NOUS SUIVRE</h3>
          <div className={styles.socialLogos}>
          <Link href="https://www.instagram.com/nojykoff/?hl=fr">
              <Image
                src="/assets/logos/instagram.svg"
                width={46}
                height={46}
                alt="logo instagram"
              />
            </Link>
            <Link href="https://www.facebook.com/NOJYK/">
              <Image
                src="/assets/logos/facebook.png"
                width={46}
                height={46}
                alt="logo facebook"
              />
            </Link>
            <Link href="https://www.tiktok.com/@nojykoff/">
              <Image
                src="/assets/logos/tiktok.png"
                width={46}
                height={46}
                alt="logo tiktok"
              />
            </Link>
            <Link href="https://twitter.com/Nojykoff">
              <Image
                src="/assets/logos/twitter.png"
                width={46}
                height={46}
                alt="logo twitter"
              />
            </Link>
            <Link href="https://www.youtube.com/channel/UCeF2gfs9PR2PeA6--5ruryg">
              <Image
                src="/assets/logos/youtube.svg"
                width={46}
                height={46}
                alt="logo youtube"
              />
            </Link>
            <Link href="https://fr.linkedin.com/company/nojyk">
              <Image
                src="/assets/logos/linkedin.png"
                width={46}
                height={46}
                alt="logo linkedin"
              />
            </Link>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>© Copyright Nojyk SAS 2023</p>
    </div>
  );
};

export default Footer;
