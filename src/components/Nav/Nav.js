import React from "react";
import styles from "./Nav.module.scss";
import lightRick from "assets/icons/light-rick.png";
import darkRick from "assets/icons/dark-rick.png";
import lightMarvel from "assets/icons/light-marvel.png";
import darkMarvel from "assets/icons/dark-marvel.png";
import lightPokemon from "assets/icons/light-pokemon.png";
import darkPokemon from "assets/icons/dark-pokemon.png";
import lightSettings from "assets/icons/light-settings.png";
import darkSettings from "assets/icons/dark-settings.png";

import { NavLink } from "react-router-dom";
import { ThemeContext } from "contexts";

// in usage https://icons8.com/icons/set/iron-man

const Nav = ({ toggleModal, changeTheme }) => {
  return (
    <ThemeContext.Consumer>
      {({ themeType }) => {
        return (
          <nav
            className={themeType === "light" ? styles.lightNav : styles.darkNav}
          >
            <NavLink className={styles.logo} to="/">
              <p className={styles.logoFirstWord}>Fav</p>
              <p className={styles.logoSecondWord}>Cards</p>
            </NavLink>
            <ul className={styles.links}>
              <NavLink
                className={`${styles.link} ${styles.linkRickMorty}`}
                activeClassName={styles.linkActiveRickMorty}
                to="/rickandmorty"
              >
                <img
                  className={styles.linkIcon}
                  src={themeType === "light" ? lightRick : darkRick}
                  alt="rick and morty"
                />
              </NavLink>

              <NavLink
                className={`${styles.link} ${styles.linkMarvel}`}
                activeClassName={styles.linkActiveMarvel}
                to="/marvel"
              >
                <img
                  className={styles.linkIcon}
                  src={themeType === "light" ? lightMarvel : darkMarvel}
                  alt="marvel"
                />
              </NavLink>

              <NavLink
                className={`${styles.link} ${styles.linkPokemons}`}
                activeClassName={styles.linkActivePokemons}
                to="/pokemons"
              >
                <img
                  className={styles.linkIcon}
                  src={themeType === "light" ? lightPokemon : darkPokemon}
                  alt="pokemons"
                />
              </NavLink>
            </ul>
            <button className={styles.modalBtn} onClick={toggleModal}>
              <img
                className={styles.modalBtnImage}
                src={themeType === "light" ? lightSettings : darkSettings}
                alt="x"
              />
            </button>
          </nav>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Nav;
