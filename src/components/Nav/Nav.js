import React from "react";
import styles from "./Nav.module.scss";
import ramIcon from "../../assets/icons/ram.png";
import marvelIcon from "../../assets/icons/marvel.png";
import narutoIcon from "../../assets/icons/naruto.png";

// in usage https://icons8.com/icons/set/iron-man

const Nav = () => (
  <nav className={styles.wrapper}>
    <div className={styles.logo}>FavCarts</div>
    <ul className={styles.links}>
      <li className={`${styles.link} ${styles.link__rm}`}>
        <img className={styles.icon}  src={ramIcon} alt="rick and morty" />
      </li>
      <li className={`${styles.link} ${styles.link__marvel}`}>
        <img className={styles.icon} src={marvelIcon} alt="marvel" />
      </li>

        <li className={`${styles.link} ${styles.link__marvel}`}>
        <img className={styles.icon} src={narutoIcon} alt="naruto" />
      </li>
    </ul>
  </nav>
);

export default Nav;
