import React from "react";
import styles from "./Avatar.module.scss";

const Avatar = ({ image }) => (
  <>
    <div className={styles.avatar}>
      <img className={styles.avatar__img} src={image} alt="" />
    </div>
  </>
);

export default Avatar;
