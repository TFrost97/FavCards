import React from "react";
import CharactersCards from "../components/CharactersCards/CharactersCards";
import axios from "axios";

class Cards extends React.Component {
  RICKandMORTY_API = "https://rickandmortyapi.com";

  state = {
    characters: [],
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
    const data = await axios.get(`${this.RICKandMORTY_API}/api/character`);
    const cardsObject = await data.data.results;
    return await cardsObject;
  };

  getMarvelCards = () => {
    return axios.get("https://swapi.dev/api/people/?search=r2");
  };

  cardsType = {
    rickMorty: this.getRickMortyCards(),
    marvel: this.getMarvelCards(),
  };

  // setState with cards type given in props (app.js)
  componentDidMount = async () => {
    return this.setState({ characters: await this.cardsType[this.props.type] });
  };

  render() {
    const { type } = this.props;
    return (
      <>
        <CharactersCards
          characters={this.state.characters}
          title={this.state.title[type]}
        />
      </>
    );
  }
}

export default Cards;
