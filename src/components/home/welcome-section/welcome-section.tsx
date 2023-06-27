import NojykLogo from "@/components/shared/nojykLogo";
import styles from "./welcome-section.module.css";
import Image from "next/image";
import Link from "next/link";

const WelcomeSection = () => {
  return (
    <div className={styles.globalContainer}>
      <h2 className={styles.title}>
        Bienvenue chez <NojykLogo size={155} />
      </h2>
      <p className={styles.description}>
        On a réuni les meilleurs restos de Marseille pour que tu puisses
        savourer les meilleurs plats de marseille sans bouger de chez toi sans
        te ruiner. On te garantit un vrai festin validé par la team NOJYK au
        meilleur prix .
      </p>
      <div className={styles.cardContainer}>
        <Image
          src="/assets/images/livraison.png"
          width={672}
          height={550}
          alt="illustration livraison"
          className={styles.cardImage}
        />
        <div className={styles.cardTextContainer}>
          <h3>On te livre sans te ruiner c’est Nojyk bébé</h3>
          <p>
            On livre les meilleurs plats de nos restos préférés directement chez
            toi, qui livre les plats de tes restos préférés chez toi ! Pourquoi
            payer plus cher alors que tu peux manger à Marseille moins cher ? Ou
            que tu soit qui que tu soit on te livre , plage , bureau , maison
            bibliothèque , stade , chez toi, avec ta gadji ou ton gadjo. Tous
            les restaurants sont valider et tester par la team NOJYK On te fais
            manger ce qu’on mange et on ne te fera jamais manger quelque chose
            qu’on ne mange pas
          </p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div
          className={`${styles.cardTextContainer} ${styles.cardTextContainerReversed}`}
        >
          <h3>
            Avec le Clic & Collect Commande en ligne et récupère la en vip
          </h3>
          <p>
            Avec notre option de click and collect, tu peux commander en ligne
            et récupérer ta commande en quelques minutes seulement et sans file
            d’attente. Tu gagnes du temps et de l&apos;argent car chez Nojyk on
            pense à toi et ton porte-monnaie ! Avec notre système de commande en
            ligne, tu évites les files d&apos;attente et les temps
            d&apos;attente interminables. Et si tu choisis le click & collect,
            tu économises même les frais de livraison.
          </p>
        </div>
        <Image
          src="/assets/images/clickandcollect.png"
          width={676}
          height={550}
          alt="illustration click and collect"
          className={styles.cardImage}
        />
      </div>
      <p className={styles.description}>Notre demarche pour vous servir</p>
      <div className={styles.cardContainer}>
        <Image
          src="/assets/images/economie.png"
          width={672}
          height={550}
          alt="illustration livraison"
          className={styles.cardImage}
          style={{objectFit: 'cover', objectPosition:'0% 0%'}}
        />
        <div className={styles.cardTextContainer}>
          <h3>
            Révélations choc : pourquoi Nojyk est votre solution économique pour
            commander en ligne
          </h3>
          <p>
            Saviez-vous que lorsque vous commandez sur une plateforme de
            livraison, vous payez en moyenne plus de 30 % de plus que le prix
            affiché chez le restaurateur, sans même compter les frais de service
            et de livraison ? Et le pire,c&apos;est que cet argent ne va ni dans
            la poche du restaurateur, ni dans celle du livreur. Avec Nojyk, nous
            avons décidé de changer cela en proposant des frais de commission
            équitables pour les restaurants et une rémunération juste pour les
            livreurs. Ainsi, vous pouvez soutenir votre restaurant préféré tout
            en économisant de l&apos;argent sur votre commande.
          </p>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <h3>On vous en dit plus en vidéo </h3>
        {/* <Image
          src="/assets/images/video-placeholder.png"
          width={960}
          height={540}
          alt="video placeholder"
          className={styles.video}
        /> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lHBixyYqt8Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.video}
        ></iframe>
        <div className={styles.socialLinksContainer}>
          <div className={styles.socialTextContainer}>
            <p>Vous aimez nos talents d’acteurs ? </p>
            <b>Retrouvez nous sur Youtube et Instagram </b>
          </div>
          <div className={styles.socialLogoContainer}>
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
    </div>
  );
};

export default WelcomeSection;
