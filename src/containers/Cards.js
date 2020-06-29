import React from "react";
import CharactersCards from "../components/CharactersCards/CharactersCards";
import axios from "axios";

// axios cards data
import MarvelCards from "./helperClasses/MarvelCards";
import RickMortyCards from "./helperClasses/RickMortyCards";
import PokemonsCards from "./helperClasses/PokemonsCards";

import { TypeContext } from "contexts";

class Cards extends React.Component {
  state = {
    characters: [],
    title: {
      rickMorty: "Rick And Morty",
      marvel: "Marvel",
      pokemons: "Pokemons, did you catch them all?",
    },

    // why function shouldn't work in higher scope?
    // type: {
    //   rickMorty: this.getRickMortyCards(),
    //   marvel: this.getMarvelCards,
    // },
  };

  getRickMortyCards = async () => {
    return await new RickMortyCards().getCards();
  };

  getMarvelCards = async () => {
    return await new MarvelCards().getCards();
  };

  getPokemonsCards = async () => {
    return await new PokemonsCards().getCards();
  };

  cardsType = {
    rickMorty: this.getRickMortyCards,
    marvel: this.getMarvelCards,
    pokemons: this.getPokemonsCards,
  };

  // setState with cards type given in props (app.js)
  componentDidMount = async () => {
    const getCards = await this.cardsType[this.props.type];
    // console.log(await getCards(), "get cards");
    // const result = await getCards();
    // console.log(result[0], 'result');

    return this.setState({ characters: await getCards() });
  };

  render() {
    const { type } = this.props;
    return (
      <>
        <TypeContext.Provider value={type}>
          <CharactersCards
            characters={this.state.characters}
            title={this.state.title[type]}
            type={type}
          />
        </TypeContext.Provider>
      </>
    );
  }
}

export default Cards;
