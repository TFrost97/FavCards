import React, { Children } from "react";
import styles from "./Title.module.scss";
import classnames from "classnames";
import { ThemeContext } from "contexts";
import { TypeContext } from "contexts";

const Title = (props) => (
  <ThemeContext.Consumer>
    {({ themeType }) => (
      <TypeContext.Consumer>
        {(type) => {
          let borderColor;
          switch (type) {
            case "rickMorty":
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
            <h1
              className={classnames(
                themeType === "light" ? styles.light : styles.dark,
                borderColor
              )}
            >
              {props.children}
            </h1>
          );
        }}
      </TypeContext.Consumer>
    )}
  </ThemeContext.Consumer>
);

export default Title;
