import React from "react";
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>About me</h5>
            <h2>What Skills I Have</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Personal qualities</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsibility</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Honesty</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Problem solving</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Communicability</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Teamwork</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Pursuit of goals</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Desire to improve</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Diligence</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Quick understanding</p>
                        </li>
                    </ul>
                </article>
                {/* END OF PERSONAL QUALITIES */}
                <article className="service">
                    <div className="service__head">
                        <h3>Skills</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Python</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>HTML</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>CSS</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>SCSS</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>jQuery</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>React</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Django</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>SQL</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Docker</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Linux</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>GitHub</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>GitLab</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Agile</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lean</p>
                        </li>
                    </ul>
                </article>
                {/* END OF SKILLS */}
                <article className="service">
                    <div className="service__head">
                        <h3>Additional information</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Speaking and writing in English</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Boxing</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I graduated Music School</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>I trained professionally in figure skating for 8 years</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Elder of the 2016-2020 University group</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>2016-2020 student representation member</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>6-year category B driver's license.</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>In 2018, I lived and worked for 4.5 months. in America.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF ADDITIONAL INFORMATION */}
            </div>
        </section>
    )
}

export default Services