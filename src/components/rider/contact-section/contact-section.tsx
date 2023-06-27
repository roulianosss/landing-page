'use client'
import styles from "./contact-section.module.css";

const ContactSection = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.titleContainer}>
        <p>Vous souhaitez avoir plus d&apos;info ?</p>
        <p>Contactez-nous !</p>
      </div>
      <form className={styles.contactForm}>
        <div className={styles.userInfosContainer}>
          <div className={styles.inputWrapper}>
            <p>Prénom et Nom</p>
            <input type="text" placeholder="Prénom et Nom" />
          </div>

          <div className={styles.inputWrapper}>
            <p>Adresse mail</p>
            <input type="text" placeholder="example@nojyk.com" />
          </div>
        </div>
        <div className={styles.messageContainer}>
          <p>Votre message</p>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Rédiger votre message ici..."
          />
          <button
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
