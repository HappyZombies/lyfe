import * as ActionTypes from "./actionTypes";

export function createInitialPlayer(newPlayer = false) {
  return {
    type: ActionTypes.CREATE_INITIAL_PLAYER,
    data: { newPlayer }
  };
}

export function updatePlayerStat(stat, value) {
  return {
    type: ActionTypes.UPDATE_STAT,
    data: { stat: stat, value: value }
  };
}

export function updatePlayerPerks(perk) {
  return {
    type: ActionTypes.UPDATE_PLAYER_PERKS,
    data: { perk }
  };
}

// TODO: Remove
export function getPlayerStats() {
  return {
    type: ActionTypes.GET_PLAYER_STATS
  };
}
