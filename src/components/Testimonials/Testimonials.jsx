import styles from './testimonials.module.css'

const testimonials = [
    {
        name: 'Азамат',
        text: 'Арендовал Mercedes S-Class для свадьбы. Машина была в идеальном состоянии, сервис на высшем уровне!',
        car: 'Mercedes S-Class',
    },
    {
        name: 'Диана',
        text: 'Очень удобное оформление и быстрая доставка авто. Брала BMW X7 — осталась в восторге!',
        car: 'BMW X7',
    },
    {
        name: 'Эрмек',
        text: 'Лучший сервис в городе. Поддержка реагирует моментально. Рекомендую!',
        car: 'Range Rover Vogue',
    },
]

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <h2 className={styles.title}>Отзывы клиентов</h2>
            <div className={styles.list}>
                {testimonials.map((t, idx) => (
                    <div key={idx} className={styles.card}>
                        <p className={styles.text}>"{t.text}"</p>
                        <h3 className={styles.name}>- {t.name}</h3>
                        <span className={styles.car}>{t.car}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials
