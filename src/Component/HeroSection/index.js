import React from 'react'
import Button from '../Button/index'
import '../../App.css'
import './index.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAIDS</h1>
            <p>Apa yang kamu tunggu ?</p>
            <div className="hero-btns">
                <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH TRAILER <i class="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
