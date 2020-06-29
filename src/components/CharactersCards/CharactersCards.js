import React from "react";
import styles from "./CharactersCards.module.scss";
import Card from "./Card/Card";
import Title from "./Title/Title";

import { typeContext } from "contexts";

const CharactersCards = ({ characters, title, type }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Title>{title}</Title>

        <ul className={styles.cards}>
          {characters.map((character) => {
            let additionalInfo;

            switch (type) {
              case "rickMorty":
                additionalInfo = (
                  <>
                    <p className={styles.text}>Name: {character.name}</p>
                    <p className={styles.text}>Species: {character.species}</p>
                    <p className={styles.text}>Gender: {character.gender}</p>
                  </>
                );
                break;
              case "marvel":
                additionalInfo = (
                  <>
                    <p className={styles.text}>Name: {character.name}</p>
                    <p className={styles.text}>Desc: {character.desc}</p>
                  </>
                );
                break;
              case "pokemons":
                additionalInfo = (
                  <>
                    <p className={styles.text}>Name: {character.name}</p>
                    <p className={styles.text}>Type: {character.type}</p>
                    <p className={styles.text}>Ability: {character.ability}</p>
                  </>
                );
                break;
            }
            return (
              // <h1>{"be"}</h1>
              // <h1>{character.id}</h1>
              <Card
                //   // always
                //   // pass
                name={character.name}
                image={character.image}
                //   conditionally
                //   gender={character.gender}
                //   species={character.species}
                additionalInfo={additionalInfo}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CharactersCards;
