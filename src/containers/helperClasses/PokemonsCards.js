import axios from "axios";

// pokeAPI need more than 1 request and taking images from other api
class PokemonsCards {
  constructor() {
    this.BASE_url = `https://pokeapi.co/api/v2/pokemon`;
    this.IMAGE_url = `https://pokeres.bastionbot.org/images/pokemon/`;

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

  // resolve only the name and url to specyfic pokemon details
  getCardsData = async () => await axios.get(`${this.BASE_url}?limit=20`);

  // get details from second request
  getCardDataDetail = async (index_) =>
    await axios.get(`${this.BASE_url}/${index_}/`);

  getCardImage = async (index_) =>
    await axios.get(`${this.IMAGE_url}/${index_}.png`);

  // create each card object and push to characters object in constructor
  getCards = async () => {
    const cardsData = await this.getCardsData();
    // Pokemons API structre has object data and then results array
    // use there to have capability to use map method
    await cardsData.data.results.map(async (card_, index_) => {
      let cardDetails = await this.getCardDataDetail(index_ + 1);
      cardDetails = await cardDetails.data;

      // store image url in variables
      let cardImage = await this.getCardImage(index_ + 1);
      cardImage = await cardImage.config.url;

      const card = {
        name: cardDetails.name,
        type: cardDetails.types[0].type.name,
        ability: cardDetails.abilities[0].ability.name,
        image: await cardImage,
      };
      this.characters.push(card);
    });
  };

  init = async () => {
    await this.getCards();
    return this.characters;
  };
}

export default PokemonsCards;
