import styles from './hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <h1 className={styles.title}>Арендуй авто премиум-класса</h1>
                <p className={styles.title}>
                    Mercedes, BMW, Porsche — для тех, кто выбирает стиль
                </p>
                <button className={styles.btn}>Посмотреть автомобили</button>
            </div>
        </section>
    )
}
