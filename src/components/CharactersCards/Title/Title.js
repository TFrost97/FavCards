import React, { Children } from "react";
import styles from "./Title.module.scss";

const Title = (props) => <h1 className={styles.title}>{props.children}</h1>;

export default Title;
