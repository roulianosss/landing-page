import NojykLogo from "@/components/shared/nojykLogo";
import styles from "./welcome-section.module.css";
import Image from "next/image";
import VideoContainer from "@/components/shared/video/video-container";

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
      <div
        className={`${styles.cardContainer} ${styles.cardContainerReversed}`}
      >
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
      <h3 className={styles.description} style={{ fontSize: "1.5rem" }}>
        Notre demarche pour vous servir
      </h3>
      <div className={styles.cardContainer}>
        <Image
          src="/assets/images/economie.png"
          width={672}
          height={550}
          alt="illustration livraison"
          className={styles.cardImage}
          style={{ objectFit: "cover", objectPosition: "0% 0%" }}
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

      <VideoContainer url="https://www.youtube.com/embed/lHBixyYqt8Y" />
    </div>
  );
};

export default WelcomeSection;
