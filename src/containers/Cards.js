import React from "react";
import CharactersCards from "../components/CharactersCards/CharactersCards";
import axios from "axios";

// axios cards data
import MarvelCards from "./helperClasses/MarvelCards";
import RickMortyCards from "./helperClasses/RickMortyCards";
import PokemonsCards from "./helperClasses/PokemonsCards";

class Cards extends React.Component {
  state = {
    characters: "bla",
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
    return new RickMortyCards();
  };

  getMarvelCards = async () => {
    return new MarvelCards();
  };

  getPokemonsCards = async () => {
    return new PokemonsCards();
  };

  cardsType = {
    rickMorty: this.getRickMortyCards,
    marvel: this.getMarvelCards,
    pokemons: this.getPokemonsCards,
  };

  // setState with cards type given in props (app.js)
  componentDidMount = async () => {
    // console.log(await this.cardsType["marvel"]());
    // console.log(await [this.props.type]);
    console.log(this.props.type, "props type");
    const getCards = await this.cardsType[this.props.type];
    // console.log(await getCards());

    return await this.setState({ characters: await getCards() });
  };

  render() {
    const { type } = this.props;
    return (
      <>
        {/* <img src={this.state.characters[0].thumbnail.path} alt="" /> */}
        {/* <CharactersCards
          characters={this.state.characters}
          title={this.state.title[type]}
        /> */}
      </>
    );
  }
}

export default Cards;
