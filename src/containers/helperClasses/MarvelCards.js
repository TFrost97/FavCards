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

    // store all card object
    this.characters = [
      // {
      // name: value,
      // desc: value,
      // image: value,
      // }
    ];
    // console.log(this.characters[0], "characters marvel 2");

    console.log(this.characters, "characters");
  }

  getHash = () => MD5(this.timeStamp + this.privateKey + this.publicKey);

  getCardsData = async () => {
    return await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.hash}`
    );
  };

  // Marvel api gives only part of image url
  // getImage parse path into full url
  getImage = (path_) => {
    return `${path_}/${this.imageOptions.size}.${this.imageOptions.extansion}`;
  };

  // for empty description set sample one
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
      // console.log(card, "karta marvel");

      this.characters.push(card);
    });
    return this.characters;
  };
}

export default MarvelCards;
