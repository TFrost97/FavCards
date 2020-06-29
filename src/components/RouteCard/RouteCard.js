import React from "react";
import styles from "./RouteCard.module.scss";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

//icons
import marvel from "assets/icons/dark-marvel.png";
import rickandmorty from "assets/icons/dark-rick.png";
import pokemons from "assets/icons/dark-pokemon.png";

const RouteCard = ({ type }) => {
  let icon;
  let colorCard;

  switch (type) {
    case "marvel":
      icon = marvel;
      colorCard = styles.cardMarvel;
      break;
    case "rickandmorty":
      icon = rickandmorty;
      colorCard = styles.cardRickMorty;

      break;
    case "pokemons":
      icon = pokemons;
      colorCard = styles.cardPokemons;

      break;
  }

  return (
    <div className={classnames(styles.card, colorCard)}>
      <img className={styles.icon} src={icon} alt="" />
      <NavLink className={styles.link} to={`/${type}`}>
        Display Cards
      </NavLink>
    </div>
  );
};

export default RouteCard;
