import styles from './features.module.css'
import { Shield, Clock, Car, Headphones } from 'lucide-react'

const features = [
    {
        icon: <Shield size={32} />,
        title: 'Безопасность и надежность',
        desc: 'Каждый автомобиль проходит регулярное техническое обслуживание и проверку перед арендой.',
    },
    {
        icon: <Clock size={32} />,
        title: 'Быстрое оформление',
        desc: 'Оформите аренду всего за несколько минут без лишних бумаг.',
    },
    {
        icon: <Car size={32} />,
        title: 'Премиальные авто',
        desc: 'В нашем автопарке только люксовые модели в идеальном состоянии.',
    },
    {
        icon: <Headphones size={32} />,
        title: 'Поддержка 24/7',
        desc: 'Мы всегда на связи и готовы помочь вам в любой момент.',
    },
]

export const Features = () => {
    return (
        <section className={styles.features}>
            <h2 className={styles.title}>Почему выбирают нас</h2>
            <div className={styles.grid}>
                {features.map((feature, i) => (
                    <div className={styles.card}>
                        <div className={styles.icon}>{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
