import * as ActionTypes from "./actionTypes";

export function createInitialPlayer() {
  return {
    type: ActionTypes.CREATE_INITIAL_PLAYER
  };
}

export function updatePlayerStat(stat, value) {
  return {
    type: ActionTypes.UPDATE_STAT,
    data: { stat: stat, value: value }
  };
}
