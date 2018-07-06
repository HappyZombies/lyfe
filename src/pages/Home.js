import React, { Component } from "react";
import ButtonLink from "../components/ButtonLink";
import { Link } from "react-router-dom";
import store from "store";

class Home extends Component {
  onNewGameCLick = () => {
    const savedData = store.get("savedGame");
    console.log(this.props);
    this.props.history.push("new");
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.onNewGameCLick}>
          New Game
        </button>
        {/* <ButtonLink to="game" disabled={savedData === undefined}>
          Continue
        </ButtonLink> */}
      </div>
    );
  }
}

export default Home;
