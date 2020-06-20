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
            // always pass
            name={character.name}
            image={character.image}
            // conditionally
            gender={character.gender}
            species={character.species}
          />
        ))}
      </ul>
    </div>
  </>
);

export default CharactersCards;
