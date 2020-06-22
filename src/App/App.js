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
          <Route path="/">
            <h1>główna strona!@!!@!@!@!@!@!!@!@!@</h1>
          </Route>
          <Route path="/rickandmorty">
            <Cards type="rickMorty" />
          </Route>

          <Route path="/marvel">
            <h1>future MARVEL</h1>
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
