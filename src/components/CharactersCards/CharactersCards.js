import React from "react";
import styles from "./CharactersCards.module.scss";
import Card from "./Card/Card";
import Title from "./Title/Title";

const CharactersCards = ({ characters, title, type }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Title>{title}</Title>

        <ul className={styles.cards}>
          {characters.map((character) => {
            let additionalInfo = <div>sas</div>;
            console.log(characters, "characters");

            switch (type) {
              case "rickMorty":
                additionalInfo = (
                  <>
                    <p className={styles.text}>name: {character.name}</p>
                    <p className={styles.text}>species: {character.species}</p>
                    <p className={styles.text}>gender: {character.gender}</p>
                  </>
                );
                break;
              case "marvel":
                additionalInfo = (
                  <>
                    <p className={styles.text}>name: {character.name}</p>
                    <p className={styles.text}>desc: {character.desc}</p>
                  </>
                );
                break;
              case "pokemons":
                additionalInfo = (
                  <>
                    <p className={styles.text}>name: {character.name}</p>
                    <p className={styles.text}>type: {character.type}</p>
                    <p className={styles.text}>ability: {character.ability}</p>
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
