import styles from './CTA.module.css'

const CTA = () => {
    return (
        <section className={styles.cta}>
            <div className={styles.content}>
                <h2>Готов выбрать свой автомобиль?</h2>
                <p>
                    Мы поможем подобрать идеальный люкс автомобиль под любое
                    событие.
                </p>
                <button className={styles.btn}>Забронировать сейчас</button>
            </div>
        </section>
    )
}

export default CTA
