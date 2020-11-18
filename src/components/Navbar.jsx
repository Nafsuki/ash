import React from 'react'
import { FaHouzz, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import logo from '../css/img/logo.svg';
import navbar from './Navbar.module.scss';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const open = document.getElementById('open');
const close = document.getElementById('close');

const openMenu = () => {
  open.classList.toggle('show-menu');
};

const Navbar = () => {
  return (
    <div className={navbar.navbar}>
      <div className={navbar.logo}>
        <img src={logo} alt="logo"/>
      </div>
      
      <div>
        <ul className={navbar.menulist}>
          <li><IconButton id="close" className={navbar.closebtn}><MenuIcon /></IconButton></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      </div>
      <div className={navbar.snsIcons}>
        <a href="#"><FaHouzz /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaFacebookF /></a>
      </div>
      
      <div className={navbar.menuIcon}>
      <IconButton id="open" onClick={openMenu}>
        <MenuIcon />
      </IconButton>
      </div>
    </div>
  )
}

export default Navbar;