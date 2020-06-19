import React from "react";
import styles from "./App.module.scss";
import Cards from "../containers/Cards";
import Nav from "../components/Nav/Nav";

class App extends React.Component {
  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <Nav />
          <Cards />
        </div>
      </>
    );
  }
}

export default App;
