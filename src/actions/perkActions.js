import * as ActionTypes from "./actionTypes";

export function createInitialPerks(playerStats) {
  return {
    type: ActionTypes.CREATE_INITIAL_PERKS,
    data: { playerStats }
  };
}
