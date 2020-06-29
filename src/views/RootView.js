import React from "react";
import styles from "./RootView.module.scss";

import Title from "components/Title/Title";
import RouteCard from "components/RouteCard/RouteCard";
// import Cards from "../../";

const RootView = () => {
  // returning view for rick and morty cards
  return (
    <div className={styles.wrapper}>
      <Title margin="marginLeft">Select your favourite universum</Title>
      <ul className={styles.cards}>
        <RouteCard type="marvel" />
        <RouteCard type="rickandmorty" />
        <RouteCard type="pokemons" />
      </ul>
    </div>
  );
};

export default RootView;
