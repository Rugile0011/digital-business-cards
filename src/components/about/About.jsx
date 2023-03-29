import React from "react";
import './about.css'
import ME2 from '../../assets/me3.jpg'
import {GiLightBackpack} from 'react-icons/gi'
import {MdOutlineSchool} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
    return (
        <section id='about'>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img style={{ width: 400, height: 500 }} src={ME2} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <GiLightBackpack className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1 Year Working</small>
                        </article>
                        <article className="about__card">
                            <MdOutlineSchool className="about__icon"/>
                            <h5>Study Experience</h5>
                            <small>4,5 Years Civil Engineer 1.5 Years Programming</small>
                        </article>
                        <article className="about__card">
                            <AiOutlineFundProjectionScreen className="about__icon"/>
                            <h5>Projects</h5>
                            <small>Worked On 2 Projects</small>
                        </article>
                    </div>
                    <p>
                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    </p>
                    <a href='#contact' className="btn">Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About