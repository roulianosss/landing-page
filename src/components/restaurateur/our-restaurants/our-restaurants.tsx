import styles from './our-restaurants.module.css'
import Image from 'next/image';

const OurRestaurants = () => {

    return (
        <div className={styles.globalContainer}>
            <h3>Ils nous font déjà confiance</h3>
            <div className={styles.restaurantContainer}>
                <Image src='/assets/images/restaurants/restaurant1.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant2.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant3.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant4.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant1.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant2.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant3.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant4.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant1.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant2.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant3.png' width={200} height={200} alt='illustration de restaurant' />
                <Image src='/assets/images/restaurants/restaurant4.png' width={200} height={200} alt='illustration de restaurant' />
            </div>
        </div>
    );
}

export default OurRestaurants;