import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.scss";
import Cards from "../containers/Cards";
import Nav from "../components/Nav/Nav";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Nav />
          <Route exact path="/">
            <h1>główna strona!@!!@!@!@!@!@!!@!@!@</h1>
          </Route>
          <Route exact path="/rickandmorty">
            <Cards type="rickMorty" />
          </Route>

          <Route exact path="/marvel">
            <Cards type="marvel" />
          </Route>

          <Route exact path="/pokemons">
            <Cards type="pokemons" />
          </Route>
        </div>
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
