import React from "react";
import CharactersCards from "../components/CharactersCards/CharactersCards";
import axios from "axios";

import MarvelCards from "./helperClasses/MarvelCards";
import RickMortyCards from "./helperClasses/RickMortyCards";

// for hash marvel key
import MD5 from "crypto-js/md5";

class Cards extends React.Component {
  state = {
    characters: "bla",
    title: {
      rickMorty: "Rick And Morty",
      marvel: "Marvel",
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

  cardsType = {
    rickMorty: this.getRickMortyCards,
    marvel: this.getMarvelCards,
  };

  // setState with cards type given in props (app.js)
  componentDidMount = async () => {
    // console.log(await this.cardsType["marvel"]());
    // console.log(await [this.props.type]);
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
