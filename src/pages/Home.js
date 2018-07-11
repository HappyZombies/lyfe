import React, { Component } from "react";
import store from "store";
import { PLAYER } from "../data/Constants";

class Home extends Component {
  onNewGameCLick = () => {
    this.props.history.push("new");
  };
  onContinueCLick = () => {
    this.props.history.push("game");
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.onNewGameCLick}>
          New Game
        </button>
        <button
          disabled={store.get(PLAYER) === undefined}
          onClick={this.onContinueCLick}
        >
          Continue
        </button>
      </div>
    );
  }
}

export default Home;
