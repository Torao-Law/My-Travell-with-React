import React from 'react'
import HeroSection from '../HeroSection'
import '../../App.css'
import Card from '../card'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Card />
            <Footer />
        </>
    )
}

export default Home