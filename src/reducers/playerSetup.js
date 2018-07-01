import * as ActionTypes from "../actions/actionTypes";
import Player from "../data/Player";
import { cloneDeep } from "lodash";

const defaultState = {
  player: new Player()
};

export const playerSetup = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_INITIAL_PLAYER: {
      return { ...state };
    }
    case ActionTypes.UPDATE_STAT: {
      let player = cloneDeep(state.player);
      const STAT = action.data.stat;
      if (player.stats[STAT].value > action.data.value) {
        player.points++;
        player.stats[STAT].value--;
      } else if (player.points === 0) {
        return { ...state };
      } else if (player.stats[STAT].value < action.data.value) {
        player.points--;
        player.stats[STAT].value++;
      }
      return { ...state, player: player };
    }
    default:
      return state;
  }
};
