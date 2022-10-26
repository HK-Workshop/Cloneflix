import React from 'react';
import "./Footer.scss";
import {TfiWorld} from "react-icons/tfi"
import { AiFillCaretDown } from "react-icons/ai";

function Footer() {
  return(
    <footer className="footer">
      <div className="container">
        <h3>Des questions ? Appelez le (+33) 0805-543-063</h3>

        <ul className="footer__links">
          <li className="footer__link">
            <a href="/">FAQ</a>
          </li>
          <li className="footer__link">
            <a href="/">Centre d'aide</a>
          </li>
          <li className="footer__link">
            <a href="/">Compte</a>
          </li>
          <li className="footer__link">
            <a href="/">Presse</a>
          </li>
        </ul>

        <ul className="footer__links">
          <li className="footer__link">
            <a href="/">Relations Investisseurs</a>
          </li>
          <li className="footer__link">
            <a href="/">Recrutement</a>
          </li>
          <li className="footer__link">
            <a href="/">Utiliser des cartes cadeaux</a>
          </li>
          <li className="footer__link">
            <a href="/">Acheter des cartes cadeaux</a>
          </li>
        </ul>

        <ul className="footer__links">
          <li className="footer__link">
            <a href="/">Modes de lecture</a>
          </li>
          <li className="footer__link">
            <a href="/">Conditions d'utilisation</a>
          </li>
          <li className="footer__link">
            <a href="/">Confidentialité</a>
          </li>
          <li className="footer__link">
            <a href="/">Préférences de cookies</a>
          </li>
        </ul>

        <ul className="footer__links">
          <li className="footer__link">
            <a href="/">Mentions légales</a>
          </li>
          <li className="footer__link">
            <a href="/">Nous contacter</a>
          </li>
          <li className="footer__link">
            <a href="/">Test de vitesse</a>
          </li>
          <li className="footer__link">
            <a href="/">Garantie légales</a>
          </li>
        </ul>

        <ul className="footer__links">
          <li className="footer__link">
            <a href="/">Informations légales</a>
          </li>
          <li className="footer__link">
            <a href="/">Seulement sur Netflix</a>
          </li>
        </ul>

        <div className="footer__choose">
          <TfiWorld />
          <p>Français</p>
          <AiFillCaretDown />

        </div>

        <div className="footer__country">Cloneflix France</div>
      </div>
    </footer>
  )
}

export default Footer;
