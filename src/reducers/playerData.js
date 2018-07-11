import * as ActionTypes from "../actions/actionTypes";
import Player from "../data/Player";
import store from "store";
import { PLAYER } from "../data/Constants";
import Stats from "../data/class/Stats";

const defaultState = {
  player: store.get(PLAYER) === undefined ? new Player() : store.get(PLAYER),
  statsInfo: Stats,
  stats: null
};

const playerData = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_INITIAL_PLAYER: {
      let { player } = state;
      if (action.data.newPlayer) {
        player = new Player();
      }
      return { ...state, player };
    }
    case ActionTypes.UPDATE_STAT: {
      const {
        player,
        player: { stats }
      } = state;
      const SELECTED_STAT = action.data.stat;

      if (stats[SELECTED_STAT].value > action.data.value) {
        player.points++;
        stats[SELECTED_STAT].value--;
      } else if (player.points === 0) {
        return { ...state };
      } else if (stats[SELECTED_STAT].value < action.data.value) {
        player.points--;
        stats[SELECTED_STAT].value++;
      }
      return { ...state, player: { ...player, stats: { ...stats } } };
    }
    case ActionTypes.GET_PLAYER_STATS: {
      return { ...state, stats: state.player.stats };
    }
    default:
      return state;
  }
};

export default playerData;
