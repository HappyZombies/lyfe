import Chance from "chance";
import STATS from "./class/Stats";
import { cloneDeep } from "lodash";
const chance = new Chance();

class Player {
  constructor() {
    /**
     * the players unique id
     */
    this.id = chance.guid();
    /**
     * The players level
     */
    this.level = 1;
    /**
     * The players gender.
     */
    this.gender = chance.gender();
    /**
     * When creating a new player, the number of points they have avialabe to modify their Stats.
     */
    this.points = 5;
    /**
     * The players experience points
     */
    this.xp = 0;
    /**
     * The base stats of the players.
     * FIXME: Is this okay?
     */
    this.stats = cloneDeep(STATS);
    /**
     * The players name.
     */
    this.name = chance.name();

    /**
     * The players perks
     */
    this.perks = null;

    /**
     * The deck property contains all the players cards in hand.
     */
    this.deck = null;
    /**
     * Since we are storing this player in local storage, we do not want to store useless info. Cleanup.
     */
    this._removeStatInfo();
  }

  /**
   * Removes the description and other data that is not needed for the players stats.
   */
  _removeStatInfo = () => {
    Object.keys(this.stats).forEach((key, index) => {
      const STAT = this.stats[key];
      delete STAT.valueDescription;
      delete STAT.description;
    });
  };
}

export default Player;
