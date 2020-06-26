import React, { Children } from "react";
import styles from "./Title.module.scss";
import ThemeContext from "theme-context";

const Title = (props) => (
  <ThemeContext.Consumer>
    {({ themeType }) => {
      return (
        <h1 className={themeType === "light" ? styles.light : styles.dark}>
          {props.children}
        </h1>
      );
    }}
  </ThemeContext.Consumer>
);

export default Title;
