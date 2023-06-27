"use client";
import styles from "./carouselDemo.module.css";
import Image from "next/image";
import favoris from "/assets/pictogram/favoris.svg";
import { useRef, MutableRefObject, LegacyRef } from 'react';

const Caroussel = () => {
  // const [partenaires, setPartenaires] = useState([]);

  const refs: MutableRefObject<HTMLElement[]> = useRef([]);
  
  const addToRef = (el: HTMLDivElement) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  

  const listPartenaire = [
    {
      description: "Snack",
      image: "/assets/images/resto1.png",
      nameRest: "Kebab House",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Indienne",
      image: "/assets/images/resto2.png",
      nameRest: "Ashura",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Libanaise",
      image: "/assets/images/resto3.png",
      nameRest: "Le Liban",
      deliveryFee: "2",
      deliveryTime: "0 à-20 min",
      distance: "OO.Okm",
      notation: "4.8"
    },

    {
      description: "Cuisine Africaine",
      image: "/assets/images/resto3.png",
      nameRest: "Teranga",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },

    {
      description: "Cuisine du Monde",
      image: "/assets/images/resto3.png",
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },
    {
      description: "Snack",
      image: "/assets/images/resto1.png",
      nameRest: "Kebab House",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Indienne",
      image: "/assets/images/resto2.png",
      nameRest: "Ashura",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Libanaise",
      image: "/assets/images/resto3.png",
      nameRest: "Le Liban",
      deliveryFee: "2",
      deliveryTime: "0 à-20 min",
      distance: "OO.Okm",
      notation: "4.8"
    },

    {
      description: "Cuisine Africaine",
      image: "/assets/images/resto3.png",
      nameRest: "Teranga",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },

    {
      description: "Cuisine du Monde",
      image: "/assets/images/resto3.png",
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },
    {
      description: "Snack",
      image: "/assets/images/resto1.png",
      nameRest: "Kebab House",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Indienne",
      image: "/assets/images/resto2.png",
      nameRest: "Ashura",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.6"
    },

    {
      description: "Cuisine Libanaise",
      image: "/assets/images/resto3.png",
      nameRest: "Le Liban",
      deliveryFee: "2",
      deliveryTime: "0 à-20 min",
      distance: "OO.Okm",
      notation: "4.8"
    },

    {
      description: "Cuisine Africaine",
      image: "/assets/images/resto3.png",
      nameRest: "Teranga",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },

    {
      description: "Cuisine du Monde",
      image: "/assets/images/resto3.png",
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    },
    {
      description: "Cuisine du Monde",
      image: "/assets/images/resto3.png",
      nameRest: "El Mondo",
      deliveryFee: "2",
      deliveryTime: "0 à 20 min",
      distance: "OO.Okm",
      notation: "4.9"
    }
  ];

  const ItemRestaurant = ({ item }: { item: any }) => {
    return (
      <div className={`${styles.itemContainer} restaurant-cards`}>
        <Image
          src={item.image}
          id="imagecarou"
          className={styles.itemImage}
          alt="..."
          width={373}
          height={173}
        />
        <p className={styles.cuisine}>{item.description}</p>
        <p className={styles.favoris}>
          <Image
            src="/assets/pictogram/favoris.svg"
            width={40}
            height={40}
            className=""
            alt="pictogram favori"
          />
        </p>
        <div className={styles.descriptionContainer}>
          <div className={styles.content}>
            <h3 className={styles.name}>{item.nameRest}</h3>
            <div className="-mt-3">
              <p>
                Frais de livraison {item.deliveryFee}€ - {item.deliveryTime} -{" "}
                {item.distance}{" "}
                <span className={styles.note}>{item.notation}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const ItemRestaurant2 = ({ item }: { item: any }) => {
    return (
      <div
        className={`${styles.itemContainer} restaurant-cards2`}
        style={{ transform: "translateX(-50%)" }}
      >
        <Image
          src={item.image}
          id="imagecarou"
          className={styles.itemImage}
          alt="..."
          width={373}
          height={173}
        />
        <p className={styles.cuisine}>{item.description}</p>
        <p className={styles.favoris}>
          <Image
            src="/assets/pictogram/favoris.svg"
            width={40}
            height={40}
            className=""
            alt="pictogram favori"
          />
        </p>
        <div className={styles.descriptionContainer}>
          <div className={styles.content}>
            <h3 className={styles.name}>{item.nameRest}</h3>
            <div className="-mt-3">
              <p>
                Frais de livraison {item.deliveryFee}€ - {item.deliveryTime} -{" "}
                {item.distance}{" "}
                <span className={styles.note}>{item.notation}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const allRestaurantsCards = listPartenaire.map((item, index) => (
    <ItemRestaurant key={index} item={item} />
  ));
  const allRestaurantsCards2 = listPartenaire.map((item, index) => (
    <ItemRestaurant2 key={index} item={item} />
  ));
  let transformValue = 0;
  // const maxTransformValue = -(listPartenaire.length * 100) + 100;
  const maxTransformValue = -300
  const handleNavigation = (direction: any) => {
    if (direction === "next" && transformValue !== maxTransformValue) {
      transformValue -= 50;
    } else if (direction === "next" && transformValue === maxTransformValue) {
      transformValue = 50;
    }

    if (direction === "prev" && transformValue < 50) {
      transformValue += 50;
    } else if (direction === "prev" && transformValue >= 50) {
      transformValue = maxTransformValue;
    }

    refs.current.forEach(
        (card: any) => (card.style.transform = `translateX(${transformValue}%)`)
    )
  };

  return (
    <div className={styles.globalContainer}>
      <h1>Nos restaurants partenaires</h1>

      <div className={styles.carrouselContainer}>
        <div
          className={styles.navigationBtnPrev}
          onClick={() => handleNavigation("prev")}
        >
          <div className={styles.chevronContainer}>
            <Image
              src="/assets/pictogram/chevron.svg"
              width={25}
              height={25}
              alt="pictogram chevron"
              className={styles.chevronLeft}
            />
          </div>
        </div>
        <div className={styles.itemsContainer} ref={addToRef}>{allRestaurantsCards}</div>
        <div className={styles.itemsContainer} ref={addToRef}>{allRestaurantsCards2}</div>
        <div
          className={styles.navigationBtnNext}
          onClick={() => handleNavigation("next")}
        >
          <div className={styles.chevronContainer}>
            <Image
              src="/assets/pictogram/chevron.svg"
              width={25}
              height={25}
              alt="pictogram chevron"
              className={styles.chevronRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caroussel;
