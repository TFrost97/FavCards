import React from "react";
import styles from "./Card.module.scss";
import Avatar from "./Avatar/Avatar";
import ThemeContext from "theme-context";

const Card = ({ name, image, additionalInfo }) => (
  // create object with props KEY for displaying
  // let keys = Object.keys(props);
  // keys = Object.fromEntries(keys.map((key) => [key, key]));

  // console.log(keys);
  <ThemeContext.Consumer>
    {({ themeType }) => {
      return (
        <li
          className={themeType === "light" ? styles.lightCard : styles.darkCard}
        >
          <Avatar image={image} />
          <div className={styles.info}>
            <div className={styles.infoName}>{name}</div>
            <div className={styles.infoWrapper}>{additionalInfo}</div>
          </div>
        </li>
      );
    }}
  </ThemeContext.Consumer>
);

export default Card;
