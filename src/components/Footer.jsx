import React from 'react';
import { FaHouzz, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import footer from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div>
      <div className={footer.snsIcons}>
        <a href="#"><FaHouzz /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaFacebookF /></a>
      </div>
    
      <p className={footer.footer}>&copy; {year} ATSUHIRO SHINNO - DESIGN OFFICE</p>
    </div>
  )
}

export default Footer;