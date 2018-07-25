import React, { Component } from "react";
import store from "store";
import { PLAYER } from "../data/Constants";
import { menuSelectAudio } from "../utils"

class Home extends Component {
  constructor() {
    super();
    this.menuChange = menuSelectAudio();
  }
  onNewGameCLick = () => {
    this.menuChange.play();
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
