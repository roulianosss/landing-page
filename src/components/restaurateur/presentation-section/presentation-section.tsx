import styles from "./presentation-section.module.css";
import Link from "next/link";
import Image from "next/image";

const PresentationSection = () => {
  return (
    <div className={styles.globalContainer}>
      <p className={styles.description}>
        NOJYK c’est l’application de livraison créée à Marseille, pour les
        Marseillais. Notre mission est de révolutionner le marché de la
        livraison en offrant une alternative locale plus juste, plus équitable
        et plus rentable pour nos restaurateurs
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
          <h3>Pourquoi rejoindre NOJYK pour votre livraison ?</h3>
          <p>
            Nous comprenons les défis que vous rencontrez au quotidien pour
            gérer votre entreprise, surtout lorsque cela implique la livraison
            de vos repas. Chez NOJYK, nous croyons qu&apos;il est temps de
            changer cela et de créer une réelle alternative aux applications de
            livraison de repas traditionnelles. Nous croyons en une relation
            équitable avec nos restaurateurs partenaires. Et nous savons que
            chaque vente est importante pour vous, c&apos;est pourquoi nous
            avons la commission la plus basse du marché. On ne cache aucun coût
            ni ne facturons de frais supplémentaires. Car notre objectif est de
            vous aider à augmenter vos ventes tout en maximisant vos bénéfices.
            Nous voulons que nos partenaires se sentent à l&apos;aise en
            travaillant avec nous, sachant qu&apos;ils obtiennent le meilleur
            service possible et qu&apos;ils peuvent compter sur notre soutien.
          </p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.wordingContainer}>
          <p>Faites le choix d’une app</p>
          <p>100% made in France,</p>
          <div className={styles.textContainer}>
            <p>&</p>
            <p>développé à Marseille</p>
          </div>
        </div>
        <Image
          src="/assets/images/vieux-port.png"
          width={676}
          height={550}
          alt="illustration marseille"
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContainer}>
        <Image
          src="/assets/images/restaurateur.png"
          width={672}
          height={550}
          alt="illustration livraison"
          className={styles.cardImage}
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
        />
        <div className={styles.cardTextContainer} style={{ color: "white" }}>
          <h3 style={{ color: "white" }}>Respect des restaurateurs</h3>
          <p style={{ color: "white" }}>
            Nous savons que votre restaurant est plus qu&apos;un simple lieu de
            restauration c&apos;est un lieu de passion, d&apos;innovation et de
            communauté. Chez NOJYK, nous partageons cette même passion pour la
            nourriture et la culture marseillaise. C&apos;est pourquoi nous
            avons créé la meilleure solution de livraison pour les restaurants
            marseillais.
          </p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={`${styles.cardTextContainer} ${styles.cardTextContainerReversed}`}>
          <h3>Click & Collect</h3>
          <p>
            En rejoignant la Révolution Nojyk, vous rejoignez une communauté.
            Commandez en Click & Collect ! de restaurateurs et de clients
            engagés pour une livraison plus responsable, plus juste et plus
            locale. Alors, rejoignez-nous dès maintenant et faites partie de la
            révolution de la livraison à Marseille. Des dizaines de restaurants
            marseillais font déjà confiance à NOJYK pour la livraison et le
            click & collect. Rejoignez-nous pour faire partie de cette
            communauté florissante et voir votre entreprise prospérer et vos
            clients se régaler.
          </p>
        </div>
        <Image
          src="/assets/images/economie.png"
          width={672}
          height={550}
          alt="illustration livraison"
                  className={styles.cardImage}
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
                  
        />
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
          src="https://www.youtube.com/embed/Op9JygYuoJE"
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

export default PresentationSection;
