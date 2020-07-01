import React from "react";
import { ThemeContext } from "../contexts";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.scss";
import Cards from "../containers/Cards";
import Nav from "../components/Nav/Nav";
import RootView from "../views/RootView";
import Modal from "../components/Modal/Modal";

class App extends React.Component {
  state = {
    // theme:  light / dark
    themeType: "light",
    modalIsOpen: false,
  };

  toggleTheme = () => {
    this.setState((state) => ({
      themeType: state.themeType === "light" ? "dark" : "light",
    }));
  };

  toggleModal = () => {
    console.log("klikniety modal");
    this.setState((state) => ({
      modalIsOpen: state.modalIsOpen === false ? true : false,
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={this.state}>
          <div
            className={
              this.state.themeType === "light" ? styles.light : styles.dark
            }
          >
            <Nav
              toggleModal={this.toggleModal}
              themeType={this.state.themeType}
            />
            {this.state.modalIsOpen === true && (
              <Modal
                toggleTheme={this.toggleTheme}
                toggleModal={this.toggleModal}
              ></Modal>
            )}
            <Route exact path="/">
              <RootView />
            </Route>
            <Route exact path="/rickandmorty">
              <Cards type="rickandmorty" />
            </Route>

            <Route exact path="/marvel">
              <Cards type="marvel" />
            </Route>

            <Route exact path="/pokemons">
              <Cards type="pokemons" />
            </Route>
          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
    );

    // // future pattern
    // return (
    //   <>
    //     <div className={styles.wrapper}>
    //       <Nav />
    //       <BrowserRouter>
    //         <Route exact path="/" component={RickMortyView} />
    //         <Route path="/articles" component={MarvelView} />
    //         <Route path="/notes" component={NarutoView} />
    //       </BrowserRouter>
    //     </div>
    //   </>
    // );
  }
}

export default App;
