import NojykLogo from "@/components/shared/nojykLogo";
import styles from "./presentation-section.module.css";
import Image from "next/image";

const PresentationSection = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.cardTextContainer}>
          <h3>
            Rejoignez nos livreurs et gagnez de l&apos;argent en faisant des
            livraisons
          </h3>
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
        <Image
          src="/assets/images/livreurs.png"
          width={672}
          height={550}
          alt="illustration livraison"
          className={styles.cardImage}
        />
      </div>
      <div className={`${styles.cardContainer} ${styles.cardContainerReversed}`}>
        <Image
          src="/assets/images/remuneration.png"
          width={676}
          height={550}
          alt="illustration remuneration"
          className={styles.cardImage}
        />
        <div
          className={`${styles.cardTextContainer} ${styles.cardTextContainerReversed}`}
        >
          <h3>La rémunération</h3>
          <p>
            Nous savons que la livraison est un travail difficile et exigeant,
            c&apos;est pourquoi nous souhaitons offrir des conditions de travail
            plus équitables et transparentes à tous nos livreurs partenaires .
            Nous avons donc mis en place un système de rémunération plus juste.
            Conscient que chaque livreur est unique et a des besoins différents
            , pour cela nous mettons en place une flexibilité pour travailler à
            temps plein ou à temps partiel, selon vos préférences et vos
            horaires.
          </p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardTextContainer}>
          <h3>Notre Vision</h3>
          <p>
            Nous ne sommes pas seulement une plateforme de livraison, nous
            sommes aussi une communauté. Nous nous engageons à offrir à nos
            clients une expérience de livraison exceptionnelle, en leur
            proposant des plats de qualité et en leur garantissant une livraison
            rapide et fiable. Nous recherchons des personnes dynamiques et
            motivées, prêtes à offrir une expérience de livraison exceptionnelle
            à nos clients. Si vous êtes prêt à rejoindre notre équipe de
            livreurs passionnés et à offrir une expérience de livraison unique à
            Marseille, envoyez-nous votre candidature dès maintenant. Nous avons
            hâte de vous accueillir dans notre communauté.
          </p>
        </div>
        <Image
          src="/assets/images/vision.png"
          width={672}
          height={550}
          alt="illustration vision"
          className={styles.cardImage}
          style={{ objectFit: "cover", objectPosition: "90% 20%" }}
        />
      </div>
    </div>
  );
};

export default PresentationSection;
