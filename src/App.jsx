import './App.css'
import { CarShowcase } from './components/CarShowcase/CarShowcase'
import { Features } from './components/Features/Features'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'

export const App = () => {
    return (
        <div>
            <Hero />
            <CarShowcase />
            <Features />
            <Footer />
        </div>
    )
}
