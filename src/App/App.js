import React from "react";
import { ThemeContext } from "../contexts";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.scss";
import Cards from "../containers/Cards";
import Nav from "../components/Nav/Nav";
import RootView from "../views/RootView";

class App extends React.Component {
  state = {
    // theme:  light / dark
    themeType: "light",
  };

  toggleTheme = () => {
    this.setState((state) => ({
      themeType: state.themeType === "light" ? "dark" : "light",
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
            <Nav changeTheme={this.toggleTheme} />
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
