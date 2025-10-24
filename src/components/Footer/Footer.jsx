import styles from './contacts.module.css'

export const Contacts = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.block}>
                    <h3>Контакты</h3>
                    <p>г. Бишкек, центр, ул. Ибраимова 70</p>
                    <p>Работаем: 24/7</p>
                    <a href="tel:+996500000000" className={styles.phone}>
                        +996 500 000 000
                    </a>
                </div>
                <div className={styles.block}>
                    <h3>Связаться с нами</h3>
                    <div className={styles.socials}>
                        <a
                            href="https://t.me/yourcompany"
                            target="_blank"
                            rel="horeferner"
                        >
                            Telegram
                        </a>
                        <a
                            href="https://wa.me/996500000000"
                            target="_blank"
                            rel="horeferner"
                        >
                            WhatsApp
                        </a>
                        <a
                            href="hhttps://instagram.com/yourcompany"
                            target="_blank"
                            rel="horeferner"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
                <div className={styles.block}>
                    <h3>Оставить заявку</h3>
                    <form action="" className={styles.form}>
                        <input type="text" placeholder="Ваше имя" required />
                        <input
                            type="tel"
                            placeholder="Номер телефона"
                            required
                        />
                        <textarea
                            placeholder="Какой автомобиль вас интересует?"
                            rows="3"
                        />
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18..."
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>
            <p className={styles.copyright}>
                © {new Date().getFullYear()} Lux Auto Rental — Все права
                защищены.
            </p>
        </footer>
    )
}
