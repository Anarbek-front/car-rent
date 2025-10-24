import './App.css'
import { CarShowcase } from './components/CarShowcase/CarShowcase'
import CTA from './components/CTA/CTA'
import { Features } from './components/Features/Features'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import Testimonials from './components/Testimonials/Testimonials'

export const App = () => {
    return (
        <div>
            <Hero />
            <CarShowcase />
            <Features />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    )
}
