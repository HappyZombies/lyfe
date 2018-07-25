import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import store from "store";
import { PLAYER } from "../data/Constants";
import { menuSelectAudio } from "../utils"

import {
  createInitialPlayer,
  updatePlayerStat
} from "../actions/playerActions";
import ButtonLink from "../components/ButtonLink";

import "../assets/styles/App.css";

class PlayerCreation extends Component {
  constructor(props) {
    super(props);
    // yuck
    if (store.get(PLAYER)) {
      if (
        !window.confirm(
          "WARNING: There is already a saved player, starting a new game will delete all save data and this character. Are you sure you want to continue?"
        )
      ) {
        props.history.push("");
        return;
      } else {
        // delete save data.
        store.clearAll();
        props.createInitialPlayer(true);
        return;
      }
    }
    props.createInitialPlayer();
    this.menuChange = menuSelectAudio();
  }

  statDropDown = () => {
    return Object.keys(this.props.player.stats).map((key, index) => {
      const PLAYER_STAT = this.props.player.stats[key];
      const STAT_INFO = this.props.statsInfo[key];
      return (
        <div key={index}>
          <h3>{STAT_INFO.name}</h3>
          <p>{STAT_INFO.description}</p>
          <input
            type="number"
            value={PLAYER_STAT.value}
            onChange={e => {
              this.props.updatePlayerStat(key, e.target.value);
            }}
            min="1"
            max="10"
          />
          <b>
            ----{STAT_INFO.valueDescription
              ? STAT_INFO.valueDescription[PLAYER_STAT.value]
              : null}
          </b>
        </div>
      );
    });
  };

  onContinueClick = () => {
    this.menuChange.play();
    this.props.history.push("perks");
  };

  render() {
    return (
      <div className="App">
        <h1>Stats</h1>
        <i>Points Available: {this.props.player.points}</i>
        {this.statDropDown()}
        <br />
        <ButtonLink to="/">Go Back</ButtonLink>
        <button type="button" onClick={this.onContinueClick}>
          Continue
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  player: state.playerData.player,
  statsInfo: state.playerData.statsInfo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createInitialPlayer,
      updatePlayerStat
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerCreation);
