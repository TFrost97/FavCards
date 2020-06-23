import React from "react";
import CharactersCards from "../components/CharactersCards/CharactersCards";
import axios from "axios";

import MarvelCards from "./helperClasses/MarvelCards";

// for hash marvel key
import MD5 from "crypto-js/md5";

class Cards extends React.Component {
  RICKandMORTY_API = "https://rickandmortyapi.com";

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
    // future class
    const data = await axios.get(`${this.RICKandMORTY_API}/api/character`);
    const cardsObject = await data.data.results;
    return await cardsObject;
  };

  getMarvelCards = async () => {
    // console.log(await "działanko");
    // console.log(MD5("mesagae").toString());
    // let publicKey = "936ec40e643cd2c6bc5e6b144b9b4f19";
    // let privateKey = "f7b9509badcc927c52d1986efc1d51aad85236b6";
    // let ts = new Date().getTime();
    // let hash = MD5(ts + privateKey + publicKey);

    // let has
    // // future class
    // baseurl = 'https://gateway.marvel.com';
    // const data = await axios.get(
    //   `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    // );
    // console.log(await `${data.data.data.results}`, "rezultaty");
    //create class for rick and morty and marvel
    // console.log(await data.data.data.results[1].thumbnail.path, "rezultaty");

    // return data.data.data.results;
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
