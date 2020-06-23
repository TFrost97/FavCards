import React from "react";
import styles from "./CharactersCards.module.scss";
import Card from "./Card/Card";
import Title from "./Title/Title";

const CharactersCards = ({ characters, title }) => {
  // console.log(characters[0].thumbnail.path.toString(), "characters");
  // let marvelImg = `${characters[0].thumbnail.extansion}/standard_small.jpg`;
  // console.log(marvelImg, "marvelimg");

  return (
    <>
      <div className={styles.wrapper}>
        <Title>{title}</Title>

        <ul className={styles.cards}>
          {/* {characters.map((character) => (
            <h1>{"be"}</h1>
            // <h1>{character.id}</h1>
            // <Card
            //   // always
            //   // pass
            //   name={character.name}
            //   image={character.image}
            //   conditionally
            //   gender={character.gender}
            //   species={character.species}
            // />
          ))} */}
        </ul>
      </div>
    </>
  );
};

export default CharactersCards;
