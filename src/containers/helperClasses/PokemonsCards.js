import axios from "axios";

// pokeAPI need more than 1 request and taking images from other api
class PokemonsCards {
  constructor() {
    this.BASE_url = `https://pokeapi.co/api/v2/pokemon`;
    this.IMAGE_url = `https://pokeres.bastionbot.org/images/pokemon/`;

    // store all card object
    this.characters = [];
    // {
    // name: value,
    // spacies: value,
    // gender: value,
    // image: value,
    // }
    // console.log(this.characters[0], "characters pokemon ");
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
    console.log("jestem w getCards");
    const cardsData = (await this.getCardsData()).data.results;
    let pokeObject = [];

    for (const [index, card] of cardsData.entries()) {
      const [cardDetails, cardImage] = await Promise.all([
        this.getCardDataDetail(index + 1),
        this.getCardImage(index + 1),
      ]);

      const { name, abilities, types } = cardDetails.data;
      const url = cardImage.config.url;

      const card = {
        name: name,
        type: types[0].type.name,
        ability: abilities[0].ability.name,
        image: url,
      };

      // console.log(cardDetails, cardImage, "details & image");
      this.characters.push(card);
    }
    console.log(this.characters, "pokeObject");
    return this.characters;
    // Pokemons API structre has object data and then results array
    // use there to have capability to use map method
  };
}

export default PokemonsCards;
