import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updatePlayerPerks } from "../actions/playerActions";
import { createInitialPerks } from "../actions/perkActions";
import { menuSelectAudio } from "../utils"

import "../assets/styles/App.css";

class PerkSelection extends Component {
  constructor(props) {
    super(props);
    props.createInitialPerks(props.player.stats);
    this.menuChange = menuSelectAudio();
  }

  displayPerks = () => {
    return this.props.perks.map(perk => {
      return (
        <div key={perk.id}>
          <input type="checkbox" value={perk.id} />
          <label>
            <b>{perk.name}</b> -- {perk.description}
          </label>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Perks</h1>
        {this.displayPerks()}
        <button type="button" onClick={()=>{this.menuChange.play()}}>Continue</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  perks: state.perkData.perks,
  player: state.playerData.player
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createInitialPerks,
      updatePlayerPerks
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PerkSelection);
