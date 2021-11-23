import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/index'
import './index.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeNavMobile = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        My Travell
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={closeNavMobile}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/service" className="nav-link" onClick={closeNavMobile}>
                                Service
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link" onClick={closeNavMobile}>
                                Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-link-mobile" onClick={closeNavMobile}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">
                            SIGN UP
                        </Button>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
