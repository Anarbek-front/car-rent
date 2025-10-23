import { CarCard } from '../CarCard/CarCard'
import styles from './CarShowcase.module.css'
import mercedes from '../../assets/img/mercedes.jpg'
import bmw from '../../assets/img/bmw.jpg'
import porsche from '../../assets/img/porsche.jpg'

const cars = [
    {
        id: 1,
        name: 'Mercedes-Benz S-Class',
        price: 'от $350/день',
        image: mercedes,
    },
    {
        id: 2,
        name: 'BMW M5 Competition',
        price: 'от $320/день',
        image: bmw,
    },
    {
        id: 3,
        name: 'Porsche 911 Turbo',
        price: 'от $400/день',
        image: porsche,
    },
]

export const CarShowcase = () => {
    return (
        <section className={styles.showcase} id="cars">
            <h2 className={styles.title}>Выбери свой автомобиль</h2>
            <div className={styles.grid}>
                {cars.map((car) => (
                    <CarCard key={car.id} {...car} />
                ))}
            </div>
            <button className={styles.moreBtn}>Смотреть все</button>
        </section>
    )
}
