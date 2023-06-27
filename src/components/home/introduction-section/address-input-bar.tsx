import styles from './introduction-section.module.css'

const AddressInputBar = () => {
    return (
        <div className={styles.addressInputBarContainer}>
            <input type="text" name="" id="" placeholder='Entrez votre adresse et découvrez les restaurants à proximité...' />
            <button>Commander</button>
        </div>
    );
}

export default AddressInputBar;