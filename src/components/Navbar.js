import React, { useState } from 'react';
import { UseState } from 'react';
import "./Navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";


function Navbar() {

  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav)
  });

  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  }

  console.log(navBlack)

  return(
    <div className={`nav ${navBlack ||toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
      <button className="nav__menu" onClick={handleClick}>
        <AiOutlineMenu />
      </button>
      <img src="./images/logo.png" className="nav__logo" alt="Netflix"/>
      <nav className="nav__links">
        <a href="/" className="nav__link">Accueil</a>
        <a href="/" className="nav__link">Séries</a>
        <a href="/" className="nav__link">Films</a>
      </nav>
      <div className="nav__actions">
        <a href="/" className="nav__action">
          <AiOutlineSearch />
        </a>
        <a href="/" className="nav__action">
          <IoNotifications />
        </a>
        <a href="/" className="nav__action">
          <IoPersonSharp />
        </a>
      </div>

    </div>
  )
}

export default Navbar
