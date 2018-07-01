import Chance from "chance";
import STATS from "./Stats";
const chance = new Chance();

class Player {
  constructor() {
    // the players unique identifier
    this.id = chance.guid();
    // The players base stats.
    this.stats = STATS;
    //players age
    this.age = 0;
    //players gender
    this.gender = null;
    //the avaiable points for the stats.
    this.points = 5;
    //max total points
    this.MAX_POINTS = 35;
  }
}

export default Player;
