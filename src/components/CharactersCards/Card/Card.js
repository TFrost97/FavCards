import React from "react";
import styles from "./Card.module.scss";
import Avatar from "./Avatar/Avatar";

const Card = (props) => {
  // create object with props KEY for displaying
  // let keys = Object.keys(props);
  // keys = Object.fromEntries(keys.map((key) => [key, key]));

  const { name, gender, species } = props;
  // console.log(keys);
  return (
    <li className={styles.card}>
      <Avatar image={props.image} />
      <div className={styles.info}>
        <div className={styles.info__name}>{name}</div>
        <div className={styles.info__wrapper}>{props.additionalInfo}</div>
      </div>
    </li>
  );
};

export default Card;
