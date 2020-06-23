import React from "react";
import styles from "./Nav.module.scss";
import ramIcon from "../../assets/icons/ram.png";
import marvelIcon from "../../assets/icons/marvel.png";
import narutoIcon from "../../assets/icons/naruto.png";
import { Link } from "react-router-dom";

// in usage https://icons8.com/icons/set/iron-man

const Nav = () => (
  <nav className={styles.wrapper}>
    <Link to="/">
      <div className={styles.logo}>FavCarts</div>
    </Link>
    <ul className={styles.links}>
      <Link to="/rickandmorty">
        <li className={`${styles.link} ${styles.link__rm}`}>
          <img className={styles.icon} src={ramIcon} alt="rick and morty" />
        </li>
      </Link>

      <Link to="/marvel">
        <li className={`${styles.link} ${styles.link__marvel}`}>
          <img className={styles.icon} src={marvelIcon} alt="marvel" />
        </li>
      </Link>

      <Link to="/pokemons">
        <li className={`${styles.link} ${styles.link__marvel}`}>
          <img className={styles.icon} src={narutoIcon} alt="pokemons" />
        </li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
