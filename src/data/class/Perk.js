/**
 * The base class to create a perk along with the information related to it.
 */
class Perk {
  /**
   * @param {String} id the id of the perk, must be unique.
   * @param {String} name the name of the perk
   * @param {String} description a detailed or non detailed description of the perk
   * @param {String} icon an optional icon for the perk, default will be used if none provided.
   * @param {Array.<Stats>} statReq - an array of required stats and the value required. provide multiple for a combination. none for no stat req.
   * @param {Function} action - a call back method that contains the script of what this action will do.
   * @param {PerkType} perkType - an enum of the perktype that this is.
   * @param {Stats} playerStats - the current players stats.
   */
  constructor({ id, name, description, icon, statReq, action, playerStats }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.icon = icon ? icon : "";
    this.statReq = statReq;
    this.action = action;
    this.playerStats = playerStats;
  }

  runAction = () => {
    this.action(this.playerStats);
  };

  _meetsReq = () => {
    return true;
  };

  hidden = () => {
    return false;
  };
}

export default Perk;
