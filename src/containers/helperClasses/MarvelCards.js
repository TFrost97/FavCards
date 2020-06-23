import axios from "axios";
import MD5 from "crypto-js/md5";

class MarvelCards {
  constructor() {
    this.imageOptions = {
      size: "standard_small",
      extansion: "jpg",
    };
    this.BASE_url = `http://gateway.marvel.com/v1/public`;
    this.publicKey = "936ec40e643cd2c6bc5e6b144b9b4f19";
    this.privateKey = "f7b9509badcc927c52d1986efc1d51aad85236b6";
    this.timeStamp = new Date().getTime();
    this.hash = this.getHash();

    this.characters = [
      // {
      // name: value,
      // desc: value,
      // image: value,
      // }
    ];
    this.init();
  }

  getHash = () => MD5(this.timeStamp + this.privateKey + this.publicKey);

  getCardsData = async () => {
    return await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.hash}`
    );
  };

  getImage = (path_) => {
    return `${path_}/${this.imageOptions.size}.${this.imageOptions.extansion}`;
  };

  getDescription = (description) =>
    description.length === 0 ? "just awesome character!" : description;

  // create each card object and push to characters object in constructor
  getCards = async () => {
    const cardsData = await this.getCardsData();
    // Marvel API structre has double data and then results
    // use there to have capability to use map method
    await cardsData.data.data.results.map((card_) => {
      const card = {
        name: card_.name,
        desc: this.getDescription(card_.description),
        image: this.getImage(card_.thumbnail.path),
      };
      this.characters.push(card);
    });
    console.log(cardsData.data.data.results[0].thumbnail.path, "cardsdata");
  };

  init = async () => {
    await this.getCards();
    return this.characters;
  };
}

export default MarvelCards;
