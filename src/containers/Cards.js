import React from "react";
import CharactersCards from "../components/CharactersCards/CharactersCards";
import axios from "axios";

class Cards extends React.Component {
  RICKandMORTY_API = "https://rickandmortyapi.com";

  // characters contain name, spiecies, gender, image
  state = {
    characters: [],
    title: "Rick And Morty",
  };

  componentDidMount = async () => {
    const result = await axios.get(`${this.RICKandMORTY_API}/api/character`);
    this.setState({ characters: result.data.results });
  };

  render() {
    return (
      <CharactersCards
        title={this.state.title}
        characters={this.state.characters}
      />
    );
  }
}

export default Cards;
