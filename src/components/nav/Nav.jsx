import React from "react";
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {FaUserAstronaut} from 'react-icons/fa'
import {GiBookCover} from 'react-icons/gi'
import {RiServiceFill} from 'react-icons/ri'
import {BiMessageAltDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeHeart/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookCover/></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail/></a>
        </nav>
    )
}

export default Nav