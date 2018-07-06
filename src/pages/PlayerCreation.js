import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import {
  createInitialPlayer,
  updatePlayerStat
} from "../actions/playerActions";
import ButtonLink from "../components/ButtonLink";

import "../assets/styles/App.css";

class PlayerCreation extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    props.createInitialPlayer();
  }

  statDropDown = () => {
    return Object.keys(this.props.player.stats).map((key, index) => {
      const STAT = this.props.player.stats[key];
      return (
        <div key={index}>
          <h3>{STAT.name}</h3>
          <p>{STAT.description}</p>
          <input
            type="number"
            value={STAT.value}
            onChange={e => {
              this.props.updatePlayerStat(key, e.target.value);
            }}
            min="1"
            max="10"
          />
          <b>
            ----{STAT.valueDescription
              ? STAT.valueDescription[STAT.value]
              : null}
          </b>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.player);
    return (
      <div className="App">
        <h1>Stats</h1>
        <i>Points Available: {this.props.player.points}</i>
        {this.statDropDown()}
        <br />
        <ButtonLink to="/">Go Back</ButtonLink>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  player: state.playerData.player
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
