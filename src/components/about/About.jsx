import React from "react";
import './about.css'
import {FirstCard, SecondCard, ThirdCard} from '../card/card'
import ME2 from '../../assets/me3.jpg'
import AboutMe from '../../assets/about-me.png'

const About = () => {
    return (
        <section id='about'>
            <div className="about-title">
                <img style={{ width: 400, height: 300 }} src={AboutMe} alt="about me title" />
            </div>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img style={{ width: 400, height: 500 }} src={ME2} alt="profile photo" />
                    </div>
                </div>
                <div className="flippable-card-container">
                    <FirstCard/>
                    <SecondCard/>
                    <ThirdCard/>
                </div>
                <p>I started learning Python 2 years ago, devoted most of my time to it and focused on experience in 
                    the backend position. However, last autumn I started a frontend project, I created and improved 
                    pages using HTML, CSS, SCSS, jQuery, I am learning React on my own, so my plan is to get even 
                    more serious about Frontend.
                </p>
                <a href='#contact' className="btn btn-gradient-border talk">Let's Talk</a>
            </div>

        </section>
    )
}

// const card = document.querySelector('.card__inner');

// card.addEventListener('click', function() {
//     card.classList.toggle('is-flipped');
// });




export default About