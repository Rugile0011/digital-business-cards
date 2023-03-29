import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-without-bg2.png'
import HeaderSocials from "./HeaderSocials"

const Header = () => {
    return (
        <header>
            <div className="container.header__container">
                <div className="name">
                    <h5>Hello I'm</h5>
                    <h1>Rugilė Kovėraitė</h1>
                    <h5 className="text-light">Developer</h5>
                </div>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header