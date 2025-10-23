import styles from './carCard.module.css'

export const CarCard = ({ name, price, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.image} />
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.price}>{price}</p>
                <button className={styles.btn}>Подробнее</button>
            </div>
        </div>
    )
}
