import React from "react";
import styles from "./CharactersCards.module.scss";
import Card from "./Card/Card";
import Title from "./Title/Title";

const CharactersCards = ({ characters, title }) => (
  <>
    <div className={styles.wrapper}>
      <Title>{title}</Title>

      <ul className={styles.cards}>
        {characters.map((character) => (
          <Card
            name={character.name}
            gender={character.gender}
            species={character.species}
            image={character.image}
          />
        ))}
      </ul>
    </div>
  </>
);

export default CharactersCards;
