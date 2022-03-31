
import { Link } from "react-router-dom"
import './style/Navbar.css'

import React from 'react'

const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>
                <h1>
                    Cristian Correa
                </h1>
            </div>
            <div className="navbar_estudio">
            <Link to='/'>| Home |</Link>
            <Link to='/study'> Estudios</Link>
            </div>
        </nav>
    )
}

export default Navbar