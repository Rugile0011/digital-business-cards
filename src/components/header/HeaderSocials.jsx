import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rugil%C4%97-kov%C4%97rait%C4%97-6875a5188/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Rugile0011?tab=repositories" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials