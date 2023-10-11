import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../style/components/_header.scss";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo SportSee" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__ul">
          <NavLink to="/" className="header__li">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="#" className="header__li">
            <li>Profil</li>
          </NavLink>
          <NavLink to="#" className="header__li">
            <li>Réglages</li>
          </NavLink>
          <NavLink to="#" className="header__li">
            <li>Communauté</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
