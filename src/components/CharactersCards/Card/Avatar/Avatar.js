import React from "react";
import styles from "./Avatar.module.scss";
import classnames from "classnames";

import { TypeContext } from "contexts";

const Avatar = ({ image }) => (
  <TypeContext.Consumer>
    {(type) => {
      let borderColor;
      switch (type) {
        case "rickandmorty":
          borderColor = styles.rickMortyBorder;
          break;

        case "marvel":
          borderColor = styles.marvelBorder;
          break;

        case "pokemons":
          borderColor = styles.pokemonsBorder;
          break;
      }

      return (
        <>
          <div className={classnames(styles.avatar, borderColor)}>
            <img className={styles.avatar__img} src={image} alt="" />
          </div>
        </>
      );
    }}
  </TypeContext.Consumer>
);

export default Avatar;
