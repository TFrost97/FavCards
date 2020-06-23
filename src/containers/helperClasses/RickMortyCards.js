import axios from "axios";

class RickMortyCards {
  constructor() {
    this.BASE_url = `https://rickandmortyapi.com`;

    // store all card object
    this.characters = [
      // {
      // name: value,
      // spacies: value,
      // gender: value,
      // image: value,
      // }
    ];
    this.init();
    console.log(this.characters, "characters");
  }

  getCardsData = async () => await axios.get(`${this.BASE_url}/api/character`);

  // create each card object and push to characters object in constructor
  getCards = async () => {
    const cardsData = await this.getCardsData();
    // Rick & Morty API structre has object data and then results array
    // use there to have capability to use map method
    await cardsData.data.results.map((card_) => {
      const card = {
        name: card_.name,
        species: card_.species,
        gender: card_.gender,
        image: card_.image,
      };
      this.characters.push(card);
    });
  };

  init = async () => {
    await this.getCards();
    return this.characters;
  };
}

export default RickMortyCards;
