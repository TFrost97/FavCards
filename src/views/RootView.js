import React from "react";
import styles from "./RootView.module.scss";
import marvel from "assets/icons/light-marvel.png";

import Title from "components/Title/Title";
import RouteCard from "components/RouteCard/RouteCard";

// swipper
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
// import "react-id-swiper/lib/styles/css/swiper.css";
// import "../../node_modules/react-id-swiper/lib/styles/css/swiper.css";
// import Cards from "../../";

const RootView = () => {
  // returning view for rick and morty cards

  const params = {
    loop: true,
    // effect: "flip",
    slidesPerView: 2,
    // centeredSlides: true,
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
        <Title margin="marginLeft">Select your favourite universum</Title>

        {/* <div className={styles.kuntener}> */}
        {/* <Swiper {...params}> */}
        {/* <div class={styles["swiper-container"]}>
        <div class={styles["swiper-wrapper"]}> */}
        {/* <div className={styles["swiper-slide"]}> */}
        {/* <RouteCard type="marvel" />
            </div>
            <div className={styles["swiper-slide"]}>
              <RouteCard type="rickandmorty" />
            </div>
            <div className={styles["swiper-slide"]}>
              <RouteCard type="pokemons" />
            </div> */}
        {/* <div className={styles["swiper-slide"]}>Slide 2</div>
        <div className={styles["swiper-slide"]}>Slide 3</div>
        <div className={styles["swiper-slide"]}>Slide 4</div> */}

        {/* <div class=styles.swiper-slide>Slide 5</div>
        <div class=styles.swiper-slide>Slide 6</div>
        <div class=styles.swiper-slide>Slide 7</div>
        <div class=styles.swiper-slide>Slide 8</div>
        <div class=styles.swiper-slide>Slide 9</div> */}
        {/* <div class={styles["swiper-slide"]}>Slide 10</div> */}
        {/* </div> */}
        {/* <div class={styles["swiper-pagination"]}></div> */}
        {/* </div> */}
        {/* </Swiper>
        </div> */}
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
