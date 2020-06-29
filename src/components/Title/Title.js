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
          const marginLeft =
            props.margin === "marginLeft" ? styles.marginLeft : "";
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
            <h1
              className={classnames(
                borderColor,
                themeType === "light" ? styles.light : styles.dark,
                marginLeft
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
