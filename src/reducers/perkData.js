import * as ActionTypes from "../actions/actionTypes";
import PerkCreation from "../data/db/creation/CreatePerks";

const defaultState = {
  perks: []
};

const playerData = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_INITIAL_PERKS: {
      const perkCreationObj = new PerkCreation(action.data.playerStats);
      return { ...state, perks: perkCreationObj.getPerks() };
    }
    default:
      return state;
  }
};

export default playerData;
