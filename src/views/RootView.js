import React from "react";
import styles from "./RootView.module.scss";
import marvel from "assets/icons/light-marvel.png";

import Title from "components/Title/Title";
import RouteCard from "components/RouteCard/RouteCard";

// swipper
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const RootView = () => {
  // returning view for rick and morty cards

  const params = {
    loop: true,
    autoplay: true,
    effect: "flip",
    slidesPerView: 2,
    // slidesPerSlide: 2,
    centeredSlides: true,
    initialSlide: 0,
    setWrapperSize: true,
    // effect: "flip",
    // freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Title margin="marginLeft">Main page release soon</Title>

        {/* Waiting for official support for react swiper  */}
        {/* <Swiper {...params}>
          <div className={styles.card}>
            <RouteCard type="marvel" />
          </div>
          <div className={styles.card}>
            <RouteCard type="rickandmorty" />
          </div>
          <div className={styles.card}>
            <RouteCard type="pokemons" />
          </div>
        </Swiper> */}
      </div>
    </>
  );
};

export default RootView;

//   return (
//   <div className={styles.wrapper}>
//   <Title margin="marginLeft">Select your favourite universum</Title>
//   <ul className={styles.cards}>
//     <RouteCard type="marvel" />
//     <RouteCard type="rickandmorty" />
//     <RouteCard type="pokemons" />
//   </ul>
// </div>
// );
// };
